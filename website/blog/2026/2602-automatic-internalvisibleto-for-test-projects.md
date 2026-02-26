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
  <ItemGroup Condition="!$(MSBuildProjectName.EndsWith('.Tests'))">
    <AssemblyAttribute Include="System.Runtime.CompilerServices.InternalsVisibleTo">
      <_Parameter1>$(AssemblyName).Tests</_Parameter1>
    </AssemblyAttribute>
  </ItemGroup>
