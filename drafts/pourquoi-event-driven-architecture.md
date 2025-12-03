---
title: Pourquoi l'Event Driven Architecture ?
description: A quel besoin et contraintes l'EDA répond.
---

A common concept (like the Order in an e-commerce web shop) becomes
vital for several business capabilities, raising the need for reliability and
availability, up to the unexplored limits of the CAP theorem, where
buying more expensive hardware can’t help you anymore.
• Security and access control get more complicated: different roles are
accessing the same information, but not exactly the same, hence the need
for sophisticated filtering.
• Changing shared resources requires more coordination: “we have to be
sure” we are not breaking anyone else’s software and plans. The result is
usually more and more meetings, more trade-offs, more elapsed time to
complete, and less time for proper software development.
• Since everybody now depends on ‘the Order’, be it a database table,
a microservice or an Order Management System, changing it becomes
riskier. Risk aversion slowly starts polluting your culture; necessary
changes will be postponed.
• Developers begin to call the backbone software “legacy” with a shade
of resentment. It’s not their baby anymore; it’s just the thing that wakes
them up in the middle of the night.
• Adding refactoring stories to your backlog becomes a farce: since there
is no immediate business value to be delivered, refactoring is being
postponed or interrupted. Your attempts to explain “technical debt” to
your non-technical colleagues always leave you disappointed.
• The time it takes to implement changes to the core of your system is now
unbearable. Business departments stop asking changes in those areas
and are implementing workarounds by themselves.
• Now your workplace isn’t just that fun anymore. Some good developers
that made it great are now looking for more challenging adventures.
• The business isn’t happy either: delayed software evolution caused some
business opportunities to be missed, and new players are moving on the
market at a speed that is inconceivable with your current software.