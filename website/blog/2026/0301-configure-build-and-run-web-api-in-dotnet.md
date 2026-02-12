---
title: Configure, Build et Run une Web API en .NET Core
meta_title: Configure, Build et Run une Web API en .NET Core
slug: configure-build-and-run-web-api-in-dotnet-core
description: "Rappel rapide pour configurer, construire et lancer une Web API ASP.NET Core avec le pipeline, les services essentiels et l'ordre des middlewares."
date: 2026-01-01
category: Development
tags:
  - conception
keywords:
  - asp.net core
  - web api
  - middleware
  - dependency injection
  - swagger
authors:
  - pierre-arnaud-delsaut
draft: true
---

# ASP.NET Core Web API Quick Reminder
A fast refresher on the basic pipeline, key objects, and the easy-to-forget details when configuring a Web API in .NET.

## Mental Model (Short Version)

Create a builder.
Configure services, configuration, logging, host.
Build the app.
Configure middleware.
Map endpoints.
Run.

## Minimal Skeleton (NET 6+)

```c#
var builder = WebApplication.CreateBuilder(args);

// 1) Services (DI)
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Optional: config, logging, host
// builder.Configuration.AddJsonFile(...);
// builder.Logging.AddConsole();
// builder.Host.UseWindowsService();

var app = builder.Build();

// 2) Middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();

// 3) Endpoints
app.MapControllers();

app.Run();
```


## Key Objects and What They Do

- WebApplicationBuilder
Created by WebApplication.CreateBuilder(args)
Holds Services, Configuration, Logging, Host.

- IServiceCollection (builder.Services)
Register dependencies and framework features (controllers, Swagger, auth, etc.).

- IConfiguration (builder.Configuration)
Provides app settings from appsettings*.json, env vars, user secrets, etc.

- WebApplication (builder.Build())
The app instance where you configure middleware and map endpoints.

- IWebHostEnvironment / IHostEnvironment
Environment-specific behavior (Development, Production, etc.).

## Common Service Registrations

```c#
builder.Services.AddControllers(); // MVC/Web API controllers
builder.Services.AddEndpointsApiExplorer(); // Swagger discovery
builder.Services.AddSwaggerGen(); // Swagger UI and OpenAPI

builder.Services.AddAuthentication(...);
builder.Services.AddAuthorization(...);

builder.Services.AddCors(options =>
{
    options.AddPolicy("Default", policy =>
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});
```

## Common Middleware

```c#
app.UseHttpsRedirection();
app.UseRouting();

app.UseCors("Default");
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
```

What “Map Endpoints” Means
Mapping is registration of routes to handlers.
Example: app.MapControllers() maps controller actions;
app.MapGet("/health", ...) maps a single route to a delegate.

## Tricky Things Easy to Forget
- Order matters:
  - UseRouting() must be before auth/authorization.
  - MapControllers() (or other mappings) must be after UseRouting().
  - app.Run() must be last.
- Swagger only in Dev (often):
  - if (app.Environment.IsDevelopment()) { app.UseSwagger(); app.UseSwaggerUI(); }
- Authentication & Authorization:
  - UseAuthentication() must come before UseAuthorization().
- CORS:
 - UseCors(...) should be placed before endpoint mapping.
- HTTPS redirection can break local HTTP testing:
  - If using a non-HTTPS client, temporarily disable or configure.
- appsettings priority:
  - appsettings.{Environment}.json overrides appsettings.json.
- Minimal API vs Controllers:
 - app.MapGet(...) uses minimal APIs.
  - AddControllers() + MapControllers() is controller-based.
- FastEndpoints / Other frameworks:
  - Replace MapControllers() with their mapping method (e.g., app.UseFastEndpoints()).

## Short Checklist Before Running
- Services registered? (AddControllers, auth, swagger, etc.)
- Middleware order correct?
- Endpoint mapping present?
- Environment checks (Swagger)?
- app.Run() at the end?