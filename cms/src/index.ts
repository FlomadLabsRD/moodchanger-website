// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // Set up public permissions for content types
    const publicRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' } });

    if (publicRole) {
      const permissions = await strapi
        .query('plugin::users-permissions.permission')
        .findMany({
          where: { role: publicRole.id },
        });

      const contentTypes = ['page', 'section', 'subsection'];
      const actions = ['find', 'findOne'];

      for (const contentType of contentTypes) {
        for (const action of actions) {
          const permissionAction = `api::${contentType}.${contentType}.${action}`;
          const existingPermission = permissions.find(
            (p) => p.action === permissionAction
          );

          if (existingPermission && !existingPermission.enabled) {
            await strapi
              .query('plugin::users-permissions.permission')
              .update({
                where: { id: existingPermission.id },
                data: { enabled: true },
              });
            strapi.log.info(`Enabled permission: ${permissionAction}`);
          }
        }
      }
    }
  },
};
