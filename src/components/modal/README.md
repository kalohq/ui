# Modal

Most content creation in our products takes place in modals. The content in modals should be purely single action, for example ‘creating a task’, or ‘submitting an invoice’. Flows that invoke more than one action (such as user onboarding, or payment onboarding) should not take place in modals. Instead, consider using a wizard.

Modals are also one of the highest stacking order components, second only to alerts and notifications.

## Best Practices

- Modals are invasive in that they block the rest of the application from being used. Keep the action of the modal (whether it is a notice, or a form) as succinct as possible.
- Never stack modals on top of one another. If a modal needs to trigger another modal, then consider using a different flow, such as a wizard.
