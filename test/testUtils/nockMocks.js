//auto-generated file

var nock = require("nock");

//pass through unhandled requests

nock("http://local.gopher.email:80", { allowUnmocked: true })
  .get("/fdsa")
  .reply(200, "ok");
nock("http://local.gopher.email:80", { encodedQueryParams: true })
  .post("/api/v1/extensions", {
    extension: {
      name: "3ce943b",
      subdomain: "3ce943b",
      description: "extension1 description",
      icon: "/favicon.ico",
      autocomplete_examples: "invite, autocomplete, 3days, 3weeks, 3months",
      tags: "productivity",
      enabled: true,
      install_url: "https://www.gopher.email",
      settings_url: "https://www.gopher.email",
      help_url: "https://www.gopher.email",
      developer_name: "Hacking Hank",
      learn_more_url: "learn_more_url",
      privacy_policy_url: "privacy_policy_url",
      base_url: "https://www.gopher.email",
      oauth2_scope: "manage_extensions",
      oauth2_redirect_uri: "https://www.gopher.email",
      webhook_url: "",
      webhook_version: 1
    }
  })
  .reply(
    201,
    {
      status: "success",
      extension: {
        name: "3ce943b",
        subdomain: "3ce943b",
        stored_data: [],
        id: 423,
        owner: { email: "esweetland@gmail.com" },
        description: "extension1 description",
        icon: "/favicon.ico",
        autocomplete_examples: [
          "invite@3ce943b.gopher.email",
          "autocomplete@3ce943b.gopher.email",
          "3days@3ce943b.gopher.email",
          "3weeks@3ce943b.gopher.email",
          "3months@3ce943b.gopher.email"
        ],
        tags: "productivity",
        published: false,
        enabled: true,
        install_url: "https://www.gopher.email",
        settings_url: "https://www.gopher.email",
        base_url: "https://www.gopher.email",
        developer_name: "Hacking Hank",
        help_url: "https://www.gopher.email",
        learn_more_url: "learn_more_url",
        privacy_policy_url: "privacy_policy_url",
        oauth2_client_id: "ext_567203845bfc2293c9e06bee20058dfd",
        oauth2_scope: "manage_extensions",
        oauth2_redirect_uri: "https://www.gopher.email",
        oauth2_client_secret:
          "cab0e3d9f0182767c909cf1758eac27417b9ae156ea57fe1d9c4415967c02842",
        webhook_url: "",
        webhook_version: 1,
        metrics: [],
        installed: false
      }
    },
    [
      "Date",
      "Mon, 22 Jan 2018 07:37:23 GMT",
      "Server",
      "Apache/2.4.10 (Debian)",
      "Cache-Control",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "Access-Control-Allow-Headers",
      "authorization, Content-Type, cache-control, postman-token",
      "Access-Control-Allow-Methods",
      "GET, POST, PUT ,DELETE, OPTIONS",
      "Content-Length",
      "1017",
      "Connection",
      "close",
      "Content-Type",
      "application/json"
    ]
  );

nock("http://local.gopher.email:80", { encodedQueryParams: true })
  .put("/api/v1/extensions/423", {
    extension: { extensionid: 423, description: "updated", name: "351e5ca" }
  })
  .reply(
    200,
    {
      status: "success",
      extension: {
        name: "351e5ca",
        subdomain: "3ce943b",
        stored_data: [],
        id: 423,
        owner: { email: "esweetland@gmail.com" },
        description: "updated",
        icon: "/favicon.ico",
        autocomplete_examples: [
          "invite@3ce943b.gopher.email",
          "autocomplete@3ce943b.gopher.email",
          "3days@3ce943b.gopher.email",
          "3weeks@3ce943b.gopher.email",
          "3months@3ce943b.gopher.email"
        ],
        tags: "productivity",
        published: false,
        enabled: true,
        install_url: "https://www.gopher.email",
        settings_url: "https://www.gopher.email",
        base_url: "https://www.gopher.email",
        developer_name: "Hacking Hank",
        help_url: "https://www.gopher.email",
        learn_more_url: "learn_more_url",
        privacy_policy_url: "privacy_policy_url",
        oauth2_client_id: "ext_567203845bfc2293c9e06bee20058dfd",
        oauth2_scope: "manage_extensions",
        oauth2_redirect_uri: "https://www.gopher.email",
        oauth2_client_secret:
          "cab0e3d9f0182767c909cf1758eac27417b9ae156ea57fe1d9c4415967c02842",
        webhook_url: "",
        webhook_version: 1,
        metrics: { unique_users: { "2018-01-22": 1 } },
        installed: false
      }
    },
    [
      "Date",
      "Mon, 22 Jan 2018 07:37:24 GMT",
      "Server",
      "Apache/2.4.10 (Debian)",
      "Cache-Control",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "Access-Control-Allow-Headers",
      "authorization, Content-Type, cache-control, postman-token",
      "Access-Control-Allow-Methods",
      "GET, POST, PUT ,DELETE, OPTIONS",
      "Content-Length",
      "1033",
      "Connection",
      "close",
      "Content-Type",
      "application/json"
    ]
  );

nock("http://local.gopher.email:80", { encodedQueryParams: true })
  .get("/api/v1/extensions")
  .reply(
    200,
    {
      status: "success",
      extensions: [
        {
          name: "Todoist (separate account)",
          subdomain: "td",
          stored_data: [],
          installed: false,
          id: 6,
          owner: { email: "esweetland+a494a9@gmail.com" },
          description: "This is a test todo'ist extension",
          icon:
            "https://assets.materialup.com/uploads/26ec4915-8400-4e0d-8768-1e1644b49490/QBp-fP7LCWjl1zya5IxEfnypL__RXmymIAQmRiSv5aSzzWUdPcpdvAodBJmXbGm3d7HI=w300",
          autocomplete_examples: [],
          tags: "todo",
          published: true,
          enabled: true,
          install_url: "http://localhost:3000/",
          settings_url: "http://localhost:3000",
          base_url: "",
          developer_name: "",
          help_url: "",
          learn_more_url: "",
          privacy_policy_url: "",
          oauth2_client_id: "ext_8ef5d2515ddfc0d9a08dfdc67a1e55c9",
          oauth2_scope: "get_user_info extension_manage_self",
          oauth2_redirect_uri: "https://www.getpostman.com/oauth2/callback"
        },
        {
          name: "Todoist",
          subdomain: "demo",
          stored_data: [],
          installed: true,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/84/14b6d52bf7a9b496/",
          id: 8,
          owner: { email: "esweetland@gmail.com" },
          description: "This is a test todoist extension",
          icon:
            "https://cdn.gomix.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Flogo-day.svg",
          autocomplete_examples: [],
          tags: "",
          published: true,
          enabled: true,
          install_url: "http://fut-extension-base-glitch.glitch.me/auth",
          settings_url: "http://fut-base-extension.glitch.me/settings",
          base_url: "http://e1c3b328.ngrok.io/",
          developer_name: "",
          help_url: "",
          learn_more_url: "",
          privacy_policy_url: "",
          oauth2_client_id: "ext_fe0cfcb88e705bb2d7e43f665ab3ade5",
          oauth2_scope:
            "get_user_info extension_manage_self read_tasks manage_tasks",
          oauth2_redirect_uri: "https://something.glitch.me/auth/callback"
        },
        {
          name: "Local Evernote",
          subdomain: "evernote",
          stored_data: [],
          installed: true,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/49/96ab8df4e9a585d6/",
          id: 9,
          owner: { email: "esweetland@gmail.com" },
          description:
            "Great and remember Evernote Notes. Add tags right from your email. For example +tag (ex 3days-evernote+tag@fut.io). We even scheduled a reminder within Evernote that matches the followup due-date.\r\n\r\nWhen the reminder becomes due, we pull the latest version from Evernote and send it to your inbox.\r\n\r\nIf you checked off the reminder in Evernote beforehand, we won't send this. If you postponed it in Evernote, we'll send it on the due-date you set in Evernote. As you might suspect, if you hit the \"postpone\" buttons below, the reminder will be updated in Evernote, along with your email followup.",
          icon:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUOF2OQBgh-BXCXp3CfBPnKW0gENJv7KsnuJjLe5lXhIDWlfc9Cs2kzw",
          autocomplete_examples: [],
          tags: "productivity",
          published: true,
          enabled: true,
          install_url: "http://e3a86963.ngrok.io",
          settings_url: "http://e3a86963.ngrok.io",
          base_url: "",
          developer_name: "",
          help_url: "",
          learn_more_url: "",
          privacy_policy_url: "",
          oauth2_client_id: "ext_386abbf8ac61d88ddacef2c23f807090",
          oauth2_scope:
            "get_user_info extension_manage_self manage_reminders read_reminders",
          oauth2_redirect_uri: "http://e3a86963.ngrok.io/?futCallback=1"
        },
        {
          name: "kitchen",
          subdomain: "kitchen",
          stored_data: [],
          installed: true,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/60/936822b43445f794/",
          id: 13,
          owner: { email: "esweetland@gmail.com" },
          description: "The Kitchen Sink",
          icon: "",
          autocomplete_examples: [],
          tags: "[object].[when]",
          published: true,
          enabled: true,
          install_url: "http://6c5c8d28.ngrok.io",
          settings_url: "http://6c5c8d28.ngrok.io",
          base_url: "",
          developer_name: "",
          help_url: "",
          learn_more_url: "",
          privacy_policy_url: "",
          oauth2_client_id: "ext_da73ab1acb6b3d06cf647d6ca6eab850",
          oauth2_scope: "get_user_info extension_manage_self",
          oauth2_redirect_uri: "http://6c5c8d28.ngrok.io/?fut_authorized=1"
        },
        {
          name: "remind",
          subdomain: "remind",
          stored_data: [],
          installed: false,
          id: 27,
          owner: { email: "esweetland@gmail.com" },
          description: "set a reminder",
          icon: "",
          autocomplete_examples: [],
          tags: ".[who].[when]",
          published: true,
          enabled: true,
          install_url: "http://15c96cd8.ngrok.io",
          settings_url: "http://15c96cd8.ngrok.io",
          base_url: "http://15c96cd8.ngrok.io",
          developer_name: "",
          help_url: "",
          learn_more_url: "",
          privacy_policy_url: "",
          oauth2_client_id: "ext_f7d2a699f2889f4cef37fec55957539e",
          oauth2_scope:
            "get_user_info extension_manage_self manage_reminders read_reminders",
          oauth2_redirect_uri: "http://15c96cd8.ngrok.io/?fut_authorized=1"
        },
        {
          name: "gck",
          subdomain: "gk",
          stored_data: [],
          installed: true,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/81/a51eb28579a8547e/",
          id: 28,
          owner: { email: "esweetland@gmail.com" },
          description: "Gopher Command Kit",
          icon: "",
          autocomplete_examples: [],
          tags: ".cmd",
          published: true,
          enabled: true,
          install_url: "http://05atkkaj.ngrok.io/",
          settings_url: "http://05atkkaj.ngrok.io/",
          base_url: "http://05atkkaj.ngrok.io/",
          developer_name: "",
          help_url: "",
          learn_more_url: "",
          privacy_policy_url: "",
          oauth2_client_id: "ext_65c0a58d0453d98ad1bd3bd61b0d6e98",
          oauth2_scope:
            "get_user_info extension_manage_self manage_reminders read_reminders",
          oauth2_redirect_uri: ""
        },
        {
          name: "New Gopher Express (Ngrok)",
          subdomain: "gopher-express-ngrok",
          stored_data: [],
          installed: true,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/97/0443b58ddfdcc2bf/",
          id: 80,
          owner: { email: "esweetland@gmail.com" },
          description:
            "Gopher Express Ngrok is a locally hosted extension that is designed to work with a local Gophe API. ",
          icon:
            "https://assets.materialup.com/uploads/26ec4915-8400-4e0d-8768-1e1644b49490/QBp-fP7LCWjl1zya5IxEfnypL__RXmymIAQmRiSv5aSzzWUdPcpdvAodBJmXbGm3d7HI=w300",
          autocomplete_examples: [],
          tags: "",
          published: true,
          enabled: true,
          install_url: "http://gopher-express-ngrok.ngrok.io",
          settings_url: "http://gopher-express-ngrok.ngrok.io",
          base_url: "http://gopher-express-ngrok.ngrok.io",
          developer_name: "",
          help_url: "",
          learn_more_url: "",
          privacy_policy_url: "",
          oauth2_client_id: "ext_be659a394e913e1cd0019053bb6b0e86",
          oauth2_scope:
            "___futadmin___ get_user_info extension_manage_self manage_reminders read_reminders manage_logs read_logs read_tasks manage_tasks manage_extensions",
          oauth2_redirect_uri:
            "http://gopher-express-ngrok.ngrok.io/auth/callback"
        }
      ]
    },
    [
      "Date",
      "Mon, 22 Jan 2018 07:37:25 GMT",
      "Server",
      "Apache/2.4.10 (Debian)",
      "Cache-Control",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "Access-Control-Allow-Headers",
      "authorization, Content-Type, cache-control, postman-token",
      "Access-Control-Allow-Methods",
      "GET, POST, PUT ,DELETE, OPTIONS",
      "Content-Length",
      "6342",
      "Connection",
      "close",
      "Content-Type",
      "application/json"
    ]
  );

nock("http://local.gopher.email:80", { encodedQueryParams: true })
  .get("/api/v1/extensions/423", { extensionid: 423 })
  .reply(
    200,
    {
      status: "success",
      extension: {
        name: "351e5ca",
        subdomain: "3ce943b",
        stored_data: [],
        installed: false,
        id: 423,
        owner: { email: "esweetland@gmail.com" },
        description: "updated",
        icon: "/favicon.ico",
        autocomplete_examples: [
          "invite@3ce943b.gopher.email",
          "autocomplete@3ce943b.gopher.email",
          "3days@3ce943b.gopher.email",
          "3weeks@3ce943b.gopher.email",
          "3months@3ce943b.gopher.email"
        ],
        tags: "productivity",
        published: false,
        enabled: true,
        install_url: "https://www.gopher.email",
        settings_url: "https://www.gopher.email",
        base_url: "https://www.gopher.email",
        developer_name: "Hacking Hank",
        help_url: "https://www.gopher.email",
        learn_more_url: "learn_more_url",
        privacy_policy_url: "privacy_policy_url",
        oauth2_client_id: "ext_567203845bfc2293c9e06bee20058dfd",
        oauth2_scope: "manage_extensions",
        oauth2_redirect_uri: "https://www.gopher.email",
        oauth2_client_secret:
          "cab0e3d9f0182767c909cf1758eac27417b9ae156ea57fe1d9c4415967c02842",
        webhook_url: "",
        webhook_version: 1,
        metrics: { unique_users: { "2018-01-22": 1 } }
      }
    },
    [
      "Date",
      "Mon, 22 Jan 2018 07:37:26 GMT",
      "Server",
      "Apache/2.4.10 (Debian)",
      "Cache-Control",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "Access-Control-Allow-Headers",
      "authorization, Content-Type, cache-control, postman-token",
      "Access-Control-Allow-Methods",
      "GET, POST, PUT ,DELETE, OPTIONS",
      "Content-Length",
      "1033",
      "Connection",
      "close",
      "Content-Type",
      "application/json"
    ]
  );

nock("http://local.gopher.email:80", { encodedQueryParams: true })
  .delete("/api/v1/extensions/423/uninstall/", { extensionid: 423 })
  .reply(204, "", [
    "Date",
    "Mon, 22 Jan 2018 07:37:27 GMT",
    "Server",
    "Apache/2.4.10 (Debian)",
    "Cache-Control",
    "no-cache",
    "Access-Control-Allow-Origin",
    "*",
    "Access-Control-Allow-Headers",
    "authorization, Content-Type, cache-control, postman-token",
    "Access-Control-Allow-Methods",
    "GET, POST, PUT ,DELETE, OPTIONS",
    "Content-Length",
    "0",
    "Connection",
    "close",
    "Content-Type",
    "text/html; charset=UTF-8"
  ]);

nock("http://local.gopher.email:80", { encodedQueryParams: true })
  .delete("/api/v1/extensions/423", { extensionid: 423 })
  .reply(204, "", [
    "Date",
    "Mon, 22 Jan 2018 07:37:27 GMT",
    "Server",
    "Apache/2.4.10 (Debian)",
    "Cache-Control",
    "no-cache",
    "Access-Control-Allow-Origin",
    "*",
    "Access-Control-Allow-Headers",
    "authorization, Content-Type, cache-control, postman-token",
    "Access-Control-Allow-Methods",
    "GET, POST, PUT ,DELETE, OPTIONS",
    "Content-Length",
    "0",
    "Connection",
    "close",
    "Content-Type",
    "text/html; charset=UTF-8"
  ]);

nock("http://local.gopher.email:80", { encodedQueryParams: true })
  .post("/api/v1/tasks/", {
    task: {
      command: "test@gopher-express-ngrok.gopher.email",
      reminder_timeformat: "15min",
      reference_email: {
        server_recipient: "test@gopher-express-ngrok.gopher.email",
        to: ["test@gopher-express-ngrok.gopher.email"],
        cc: [],
        bcc: [],
        from: "bar@bar.email",
        subject: "Test1",
        html: "Test1",
        text: "Test1",
        attachments: []
      },
      stored_data: { privatedata1: "Value1" }
    }
  })
  .reply(
    201,
    {
      status: "success",
      task: {
        id: 1663,
        trigger_url:
          "http://local.gopher.email/api/v1/trigger/27b634dc2465994b30ab3ff2d09f7fe8/",
        created: 1516606648,
        reminder_time: 1516607548,
        reminder_timeformat: "15min",
        completed: false,
        completed_on: null,
        reference_email: {
          server_recipient: "test@gopher-express-ngrok.gopher.email",
          to: ["test@gopher-express-ngrok.gopher.email"],
          cc: [],
          bcc: [],
          from: "esweetland@gmail.com",
          reply_to: "",
          subject: "Test1",
          html: "Test1",
          text: "Test1",
          attachments: []
        },
        stored_data: { privatedata1: "Value1", contact_id: "12345" },
        relationships: {
          user: {
            primary_email: "esweetland@gmail.com",
            emails: ["esweetland@gmail.com"],
            name: "Joe Schmoe",
            timezone: "America/Los_Angeles",
            preferred_date_format: "D, F jS Y g:ia T",
            preferred_date_format_js: "MMMM Do YYYY, h:mm a"
          },
          extension: {
            name: "New Gopher Express (Ngrok)",
            flag: "gopher-express-ngrok",
            stored_data: {
              gopher_token: "c1cd0d3cd124e289aa6ff0accf30e8362d259263"
            }
          }
        }
      },
      messages: []
    },
    [
      "Date",
      "Mon, 22 Jan 2018 07:37:28 GMT",
      "Server",
      "Apache/2.4.10 (Debian)",
      "Cache-Control",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "Access-Control-Allow-Headers",
      "authorization, Content-Type, cache-control, postman-token",
      "Access-Control-Allow-Methods",
      "GET, POST, PUT ,DELETE, OPTIONS",
      "Content-Length",
      "985",
      "Connection",
      "close",
      "Content-Type",
      "application/json"
    ]
  );

nock("http://local.gopher.email:80", { encodedQueryParams: true })
  .get("/api/v1/tasks")
  .query({ "%2Flimit": "1" })
  .reply(
    200,
    {
      status: "success",
      tasks: [
        {
          id: 1071,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/40ab883c48e2b4ef8b981ff71954b2e4/",
          created: 1515474322,
          reminder_time: null,
          reminder_timeformat: "",
          completed: false,
          completed_on: null,
          reference_email: {
            server_recipient: "test@gopher-express-ngrok.gopher.email",
            to: ["test@gopher-express-ngrok.gopher.email"],
            cc: [],
            bcc: [],
            from: "esweetland@gmail.com",
            reply_to: "",
            subject: null,
            html: "",
            text: "",
            attachments: []
          },
          stored_data: { contact_id: "12345" },
          relationships: {
            user: {
              primary_email: "esweetland@gmail.com",
              emails: ["esweetland@gmail.com"],
              name: "Joe Schmoe",
              timezone: "America/Los_Angeles",
              preferred_date_format: "D, F jS Y g:ia T",
              preferred_date_format_js: "MMMM Do YYYY, h:mm a"
            },
            extension: {
              name: "New Gopher Express (Ngrok)",
              flag: "gopher-express-ngrok",
              stored_data: {
                gopher_token: "c1cd0d3cd124e289aa6ff0accf30e8362d259263"
              }
            }
          }
        },
        {
          id: 1072,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/cae7abccdf4a108371a538eb4b5b9417/",
          created: 1515474340,
          reminder_time: null,
          reminder_timeformat: "",
          completed: false,
          completed_on: null,
          reference_email: {
            server_recipient: "test@gopher-express-ngrok.gopher.email",
            to: ["test@gopher-express-ngrok.gopher.email"],
            cc: [],
            bcc: [],
            from: "esweetland@gmail.com",
            reply_to: "",
            subject: null,
            html: "",
            text: "",
            attachments: []
          },
          stored_data: [],
          relationships: {
            user: {
              primary_email: "esweetland@gmail.com",
              emails: ["esweetland@gmail.com"],
              name: "Joe Schmoe",
              timezone: "America/Los_Angeles",
              preferred_date_format: "D, F jS Y g:ia T",
              preferred_date_format_js: "MMMM Do YYYY, h:mm a"
            },
            extension: {
              name: "New Gopher Express (Ngrok)",
              flag: "gopher-express-ngrok",
              stored_data: {
                gopher_token: "c1cd0d3cd124e289aa6ff0accf30e8362d259263"
              }
            }
          }
        },
        {
          id: 1073,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/3907ab4874f261a852c7ba651e3a641c/",
          created: 1515474366,
          reminder_time: null,
          reminder_timeformat: "",
          completed: false,
          completed_on: null,
          reference_email: {
            server_recipient: "test@gopher-express-ngrok.gopher.email",
            to: ["test@gopher-express-ngrok.gopher.email"],
            cc: [],
            bcc: [],
            from: "esweetland@gmail.com",
            reply_to: "",
            subject: null,
            html: "",
            text: "",
            attachments: []
          },
          stored_data: [],
          relationships: {
            user: {
              primary_email: "esweetland@gmail.com",
              emails: ["esweetland@gmail.com"],
              name: "Joe Schmoe",
              timezone: "America/Los_Angeles",
              preferred_date_format: "D, F jS Y g:ia T",
              preferred_date_format_js: "MMMM Do YYYY, h:mm a"
            },
            extension: {
              name: "New Gopher Express (Ngrok)",
              flag: "gopher-express-ngrok",
              stored_data: {
                gopher_token: "c1cd0d3cd124e289aa6ff0accf30e8362d259263"
              }
            }
          }
        },
        {
          id: 1074,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/d09692ba6455d4bedd8d80dc567da222/",
          created: 1515474490,
          reminder_time: null,
          reminder_timeformat: "",
          completed: false,
          completed_on: null,
          reference_email: {
            server_recipient: "test@gopher-express-ngrok.gopher.email",
            to: ["test@gopher-express-ngrok.gopher.email"],
            cc: [],
            bcc: [],
            from: "esweetland@gmail.com",
            reply_to: "",
            subject: null,
            html: "",
            text: "",
            attachments: []
          },
          stored_data: { contact_id: "12345" },
          relationships: {
            user: {
              primary_email: "esweetland@gmail.com",
              emails: ["esweetland@gmail.com"],
              name: "Joe Schmoe",
              timezone: "America/Los_Angeles",
              preferred_date_format: "D, F jS Y g:ia T",
              preferred_date_format_js: "MMMM Do YYYY, h:mm a"
            },
            extension: {
              name: "New Gopher Express (Ngrok)",
              flag: "gopher-express-ngrok",
              stored_data: {
                gopher_token: "c1cd0d3cd124e289aa6ff0accf30e8362d259263"
              }
            }
          }
        },
        {
          id: 1075,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/d86214a2ba7397458eb2ba5f09e959c8/",
          created: 1515476238,
          reminder_time: null,
          reminder_timeformat: "",
          completed: false,
          completed_on: null,
          reference_email: {
            server_recipient: "test@gopher-express-ngrok.gopher.email",
            to: ["test@gopher-express-ngrok.gopher.email"],
            cc: [],
            bcc: [],
            from: "esweetland@gmail.com",
            reply_to: "",
            subject: null,
            html: "",
            text: "",
            attachments: []
          },
          stored_data: [],
          relationships: {
            user: {
              primary_email: "esweetland@gmail.com",
              emails: ["esweetland@gmail.com"],
              name: "Joe Schmoe",
              timezone: "America/Los_Angeles",
              preferred_date_format: "D, F jS Y g:ia T",
              preferred_date_format_js: "MMMM Do YYYY, h:mm a"
            },
            extension: {
              name: "New Gopher Express (Ngrok)",
              flag: "gopher-express-ngrok",
              stored_data: {
                gopher_token: "c1cd0d3cd124e289aa6ff0accf30e8362d259263"
              }
            }
          }
        },
        {
          id: 1076,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/aa40bcaac903a72f058d74d9c78e562a/",
          created: 1515476737,
          reminder_time: null,
          reminder_timeformat: "",
          completed: false,
          completed_on: null,
          reference_email: {
            server_recipient: "test@gopher-express-ngrok.gopher.email",
            to: ["test@gopher-express-ngrok.gopher.email"],
            cc: [],
            bcc: [],
            from: "esweetland@gmail.com",
            reply_to: "",
            subject: null,
            html: "",
            text: "",
            attachments: []
          },
          stored_data: { contact_id: "12345" },
          relationships: {
            user: {
              primary_email: "esweetland@gmail.com",
              emails: ["esweetland@gmail.com"],
              name: "Joe Schmoe",
              timezone: "America/Los_Angeles",
              preferred_date_format: "D, F jS Y g:ia T",
              preferred_date_format_js: "MMMM Do YYYY, h:mm a"
            },
            extension: {
              name: "New Gopher Express (Ngrok)",
              flag: "gopher-express-ngrok",
              stored_data: {
                gopher_token: "c1cd0d3cd124e289aa6ff0accf30e8362d259263"
              }
            }
          }
        },
        {
          id: 1077,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/4354833870614281785e64a96e98cf89/",
          created: 1515476976,
          reminder_time: null,
          reminder_timeformat: "",
          completed: false,
          completed_on: null,
          reference_email: {
            server_recipient: "test@gopher-express-ngrok.gopher.email",
            to: ["test@gopher-express-ngrok.gopher.email"],
            cc: [],
            bcc: [],
            from: "esweetland@gmail.com",
            reply_to: "",
            subject: null,
            html: "",
            text: "",
            attachments: []
          },
          stored_data: { contact_id: "12345" },
          relationships: {
            user: {
              primary_email: "esweetland@gmail.com",
              emails: ["esweetland@gmail.com"],
              name: "Joe Schmoe",
              timezone: "America/Los_Angeles",
              preferred_date_format: "D, F jS Y g:ia T",
              preferred_date_format_js: "MMMM Do YYYY, h:mm a"
            },
            extension: {
              name: "New Gopher Express (Ngrok)",
              flag: "gopher-express-ngrok",
              stored_data: {
                gopher_token: "c1cd0d3cd124e289aa6ff0accf30e8362d259263"
              }
            }
          }
        },
        {
          id: 1078,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/a3e937ccc4d35958c496d44c895d972b/",
          created: 1515477056,
          reminder_time: null,
          reminder_timeformat: "",
          completed: false,
          completed_on: null,
          reference_email: {
            server_recipient: "test@gopher-express-ngrok.gopher.email",
            to: ["test@gopher-express-ngrok.gopher.email"],
            cc: [],
            bcc: [],
            from: "esweetland@gmail.com",
            reply_to: "",
            subject: null,
            html: "",
            text: "",
            attachments: []
          },
          stored_data: { contact_id: "12345" },
          relationships: {
            user: {
              primary_email: "esweetland@gmail.com",
              emails: ["esweetland@gmail.com"],
              name: "Joe Schmoe",
              timezone: "America/Los_Angeles",
              preferred_date_format: "D, F jS Y g:ia T",
              preferred_date_format_js: "MMMM Do YYYY, h:mm a"
            },
            extension: {
              name: "New Gopher Express (Ngrok)",
              flag: "gopher-express-ngrok",
              stored_data: {
                gopher_token: "c1cd0d3cd124e289aa6ff0accf30e8362d259263"
              }
            }
          }
        }
      ]
    },
    [
      "Date",
      "Mon, 22 Jan 2018 07:37:32 GMT",
      "Server",
      "Apache/2.4.10 (Debian)",
      "Cache-Control",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "Access-Control-Allow-Headers",
      "authorization, Content-Type, cache-control, postman-token",
      "Access-Control-Allow-Methods",
      "GET, POST, PUT ,DELETE, OPTIONS",
      "Content-Length",
      "7138",
      "Connection",
      "close",
      "Content-Type",
      "application/json"
    ]
  );

nock("http://local.gopher.email:80", { encodedQueryParams: true })
  .get("/api/v1/tasks")
  .query({ "%2Flimit": "1" })
  .reply(
    200,
    {
      status: "success",
      tasks: [
        {
          id: 1071,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/40ab883c48e2b4ef8b981ff71954b2e4/",
          created: 1515474322,
          reminder_time: null,
          reminder_timeformat: "",
          completed: false,
          completed_on: null,
          reference_email: {
            server_recipient: "test@gopher-express-ngrok.gopher.email",
            to: ["test@gopher-express-ngrok.gopher.email"],
            cc: [],
            bcc: [],
            from: "esweetland@gmail.com",
            reply_to: "",
            subject: null,
            html: "",
            text: "",
            attachments: []
          },
          stored_data: { contact_id: "12345" },
          relationships: {
            user: {
              primary_email: "esweetland@gmail.com",
              emails: ["esweetland@gmail.com"],
              name: "Joe Schmoe",
              timezone: "America/Los_Angeles",
              preferred_date_format: "D, F jS Y g:ia T",
              preferred_date_format_js: "MMMM Do YYYY, h:mm a"
            },
            extension: {
              name: "New Gopher Express (Ngrok)",
              flag: "gopher-express-ngrok",
              stored_data: {
                gopher_token: "c1cd0d3cd124e289aa6ff0accf30e8362d259263"
              }
            }
          }
        },
        {
          id: 1072,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/cae7abccdf4a108371a538eb4b5b9417/",
          created: 1515474340,
          reminder_time: null,
          reminder_timeformat: "",
          completed: false,
          completed_on: null,
          reference_email: {
            server_recipient: "test@gopher-express-ngrok.gopher.email",
            to: ["test@gopher-express-ngrok.gopher.email"],
            cc: [],
            bcc: [],
            from: "esweetland@gmail.com",
            reply_to: "",
            subject: null,
            html: "",
            text: "",
            attachments: []
          },
          stored_data: [],
          relationships: {
            user: {
              primary_email: "esweetland@gmail.com",
              emails: ["esweetland@gmail.com"],
              name: "Joe Schmoe",
              timezone: "America/Los_Angeles",
              preferred_date_format: "D, F jS Y g:ia T",
              preferred_date_format_js: "MMMM Do YYYY, h:mm a"
            },
            extension: {
              name: "New Gopher Express (Ngrok)",
              flag: "gopher-express-ngrok",
              stored_data: {
                gopher_token: "c1cd0d3cd124e289aa6ff0accf30e8362d259263"
              }
            }
          }
        },
        {
          id: 1073,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/3907ab4874f261a852c7ba651e3a641c/",
          created: 1515474366,
          reminder_time: null,
          reminder_timeformat: "",
          completed: false,
          completed_on: null,
          reference_email: {
            server_recipient: "test@gopher-express-ngrok.gopher.email",
            to: ["test@gopher-express-ngrok.gopher.email"],
            cc: [],
            bcc: [],
            from: "esweetland@gmail.com",
            reply_to: "",
            subject: null,
            html: "",
            text: "",
            attachments: []
          },
          stored_data: [],
          relationships: {
            user: {
              primary_email: "esweetland@gmail.com",
              emails: ["esweetland@gmail.com"],
              name: "Joe Schmoe",
              timezone: "America/Los_Angeles",
              preferred_date_format: "D, F jS Y g:ia T",
              preferred_date_format_js: "MMMM Do YYYY, h:mm a"
            },
            extension: {
              name: "New Gopher Express (Ngrok)",
              flag: "gopher-express-ngrok",
              stored_data: {
                gopher_token: "c1cd0d3cd124e289aa6ff0accf30e8362d259263"
              }
            }
          }
        },
        {
          id: 1074,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/d09692ba6455d4bedd8d80dc567da222/",
          created: 1515474490,
          reminder_time: null,
          reminder_timeformat: "",
          completed: false,
          completed_on: null,
          reference_email: {
            server_recipient: "test@gopher-express-ngrok.gopher.email",
            to: ["test@gopher-express-ngrok.gopher.email"],
            cc: [],
            bcc: [],
            from: "esweetland@gmail.com",
            reply_to: "",
            subject: null,
            html: "",
            text: "",
            attachments: []
          },
          stored_data: { contact_id: "12345" },
          relationships: {
            user: {
              primary_email: "esweetland@gmail.com",
              emails: ["esweetland@gmail.com"],
              name: "Joe Schmoe",
              timezone: "America/Los_Angeles",
              preferred_date_format: "D, F jS Y g:ia T",
              preferred_date_format_js: "MMMM Do YYYY, h:mm a"
            },
            extension: {
              name: "New Gopher Express (Ngrok)",
              flag: "gopher-express-ngrok",
              stored_data: {
                gopher_token: "c1cd0d3cd124e289aa6ff0accf30e8362d259263"
              }
            }
          }
        },
        {
          id: 1075,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/d86214a2ba7397458eb2ba5f09e959c8/",
          created: 1515476238,
          reminder_time: null,
          reminder_timeformat: "",
          completed: false,
          completed_on: null,
          reference_email: {
            server_recipient: "test@gopher-express-ngrok.gopher.email",
            to: ["test@gopher-express-ngrok.gopher.email"],
            cc: [],
            bcc: [],
            from: "esweetland@gmail.com",
            reply_to: "",
            subject: null,
            html: "",
            text: "",
            attachments: []
          },
          stored_data: [],
          relationships: {
            user: {
              primary_email: "esweetland@gmail.com",
              emails: ["esweetland@gmail.com"],
              name: "Joe Schmoe",
              timezone: "America/Los_Angeles",
              preferred_date_format: "D, F jS Y g:ia T",
              preferred_date_format_js: "MMMM Do YYYY, h:mm a"
            },
            extension: {
              name: "New Gopher Express (Ngrok)",
              flag: "gopher-express-ngrok",
              stored_data: {
                gopher_token: "c1cd0d3cd124e289aa6ff0accf30e8362d259263"
              }
            }
          }
        },
        {
          id: 1076,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/aa40bcaac903a72f058d74d9c78e562a/",
          created: 1515476737,
          reminder_time: null,
          reminder_timeformat: "",
          completed: false,
          completed_on: null,
          reference_email: {
            server_recipient: "test@gopher-express-ngrok.gopher.email",
            to: ["test@gopher-express-ngrok.gopher.email"],
            cc: [],
            bcc: [],
            from: "esweetland@gmail.com",
            reply_to: "",
            subject: null,
            html: "",
            text: "",
            attachments: []
          },
          stored_data: { contact_id: "12345" },
          relationships: {
            user: {
              primary_email: "esweetland@gmail.com",
              emails: ["esweetland@gmail.com"],
              name: "Joe Schmoe",
              timezone: "America/Los_Angeles",
              preferred_date_format: "D, F jS Y g:ia T",
              preferred_date_format_js: "MMMM Do YYYY, h:mm a"
            },
            extension: {
              name: "New Gopher Express (Ngrok)",
              flag: "gopher-express-ngrok",
              stored_data: {
                gopher_token: "c1cd0d3cd124e289aa6ff0accf30e8362d259263"
              }
            }
          }
        },
        {
          id: 1077,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/4354833870614281785e64a96e98cf89/",
          created: 1515476976,
          reminder_time: null,
          reminder_timeformat: "",
          completed: false,
          completed_on: null,
          reference_email: {
            server_recipient: "test@gopher-express-ngrok.gopher.email",
            to: ["test@gopher-express-ngrok.gopher.email"],
            cc: [],
            bcc: [],
            from: "esweetland@gmail.com",
            reply_to: "",
            subject: null,
            html: "",
            text: "",
            attachments: []
          },
          stored_data: { contact_id: "12345" },
          relationships: {
            user: {
              primary_email: "esweetland@gmail.com",
              emails: ["esweetland@gmail.com"],
              name: "Joe Schmoe",
              timezone: "America/Los_Angeles",
              preferred_date_format: "D, F jS Y g:ia T",
              preferred_date_format_js: "MMMM Do YYYY, h:mm a"
            },
            extension: {
              name: "New Gopher Express (Ngrok)",
              flag: "gopher-express-ngrok",
              stored_data: {
                gopher_token: "c1cd0d3cd124e289aa6ff0accf30e8362d259263"
              }
            }
          }
        },
        {
          id: 1078,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/a3e937ccc4d35958c496d44c895d972b/",
          created: 1515477056,
          reminder_time: null,
          reminder_timeformat: "",
          completed: false,
          completed_on: null,
          reference_email: {
            server_recipient: "test@gopher-express-ngrok.gopher.email",
            to: ["test@gopher-express-ngrok.gopher.email"],
            cc: [],
            bcc: [],
            from: "esweetland@gmail.com",
            reply_to: "",
            subject: null,
            html: "",
            text: "",
            attachments: []
          },
          stored_data: { contact_id: "12345" },
          relationships: {
            user: {
              primary_email: "esweetland@gmail.com",
              emails: ["esweetland@gmail.com"],
              name: "Joe Schmoe",
              timezone: "America/Los_Angeles",
              preferred_date_format: "D, F jS Y g:ia T",
              preferred_date_format_js: "MMMM Do YYYY, h:mm a"
            },
            extension: {
              name: "New Gopher Express (Ngrok)",
              flag: "gopher-express-ngrok",
              stored_data: {
                gopher_token: "c1cd0d3cd124e289aa6ff0accf30e8362d259263"
              }
            }
          }
        }
      ]
    },
    [
      "Date",
      "Mon, 22 Jan 2018 07:37:37 GMT",
      "Server",
      "Apache/2.4.10 (Debian)",
      "Cache-Control",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "Access-Control-Allow-Headers",
      "authorization, Content-Type, cache-control, postman-token",
      "Access-Control-Allow-Methods",
      "GET, POST, PUT ,DELETE, OPTIONS",
      "Content-Length",
      "7138",
      "Connection",
      "close",
      "Content-Type",
      "application/json"
    ]
  );

nock("http://local.gopher.email:80", { encodedQueryParams: true })
  .get("/api/v1/tasks")
  .query({ "%2Flimit": "1" })
  .reply(
    200,
    {
      status: "success",
      tasks: [
        {
          id: 1071,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/40ab883c48e2b4ef8b981ff71954b2e4/",
          created: 1515474322,
          reminder_time: null,
          reminder_timeformat: "",
          completed: false,
          completed_on: null,
          reference_email: {
            server_recipient: "test@gopher-express-ngrok.gopher.email",
            to: ["test@gopher-express-ngrok.gopher.email"],
            cc: [],
            bcc: [],
            from: "esweetland@gmail.com",
            reply_to: "",
            subject: null,
            html: "",
            text: "",
            attachments: []
          },
          stored_data: { contact_id: "12345" },
          relationships: {
            user: {
              primary_email: "esweetland@gmail.com",
              emails: ["esweetland@gmail.com"],
              name: "Joe Schmoe",
              timezone: "America/Los_Angeles",
              preferred_date_format: "D, F jS Y g:ia T",
              preferred_date_format_js: "MMMM Do YYYY, h:mm a"
            },
            extension: {
              name: "New Gopher Express (Ngrok)",
              flag: "gopher-express-ngrok",
              stored_data: {
                gopher_token: "c1cd0d3cd124e289aa6ff0accf30e8362d259263"
              }
            }
          }
        },
        {
          id: 1072,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/cae7abccdf4a108371a538eb4b5b9417/",
          created: 1515474340,
          reminder_time: null,
          reminder_timeformat: "",
          completed: false,
          completed_on: null,
          reference_email: {
            server_recipient: "test@gopher-express-ngrok.gopher.email",
            to: ["test@gopher-express-ngrok.gopher.email"],
            cc: [],
            bcc: [],
            from: "esweetland@gmail.com",
            reply_to: "",
            subject: null,
            html: "",
            text: "",
            attachments: []
          },
          stored_data: [],
          relationships: {
            user: {
              primary_email: "esweetland@gmail.com",
              emails: ["esweetland@gmail.com"],
              name: "Joe Schmoe",
              timezone: "America/Los_Angeles",
              preferred_date_format: "D, F jS Y g:ia T",
              preferred_date_format_js: "MMMM Do YYYY, h:mm a"
            },
            extension: {
              name: "New Gopher Express (Ngrok)",
              flag: "gopher-express-ngrok",
              stored_data: {
                gopher_token: "c1cd0d3cd124e289aa6ff0accf30e8362d259263"
              }
            }
          }
        },
        {
          id: 1073,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/3907ab4874f261a852c7ba651e3a641c/",
          created: 1515474366,
          reminder_time: null,
          reminder_timeformat: "",
          completed: false,
          completed_on: null,
          reference_email: {
            server_recipient: "test@gopher-express-ngrok.gopher.email",
            to: ["test@gopher-express-ngrok.gopher.email"],
            cc: [],
            bcc: [],
            from: "esweetland@gmail.com",
            reply_to: "",
            subject: null,
            html: "",
            text: "",
            attachments: []
          },
          stored_data: [],
          relationships: {
            user: {
              primary_email: "esweetland@gmail.com",
              emails: ["esweetland@gmail.com"],
              name: "Joe Schmoe",
              timezone: "America/Los_Angeles",
              preferred_date_format: "D, F jS Y g:ia T",
              preferred_date_format_js: "MMMM Do YYYY, h:mm a"
            },
            extension: {
              name: "New Gopher Express (Ngrok)",
              flag: "gopher-express-ngrok",
              stored_data: {
                gopher_token: "c1cd0d3cd124e289aa6ff0accf30e8362d259263"
              }
            }
          }
        },
        {
          id: 1074,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/d09692ba6455d4bedd8d80dc567da222/",
          created: 1515474490,
          reminder_time: null,
          reminder_timeformat: "",
          completed: false,
          completed_on: null,
          reference_email: {
            server_recipient: "test@gopher-express-ngrok.gopher.email",
            to: ["test@gopher-express-ngrok.gopher.email"],
            cc: [],
            bcc: [],
            from: "esweetland@gmail.com",
            reply_to: "",
            subject: null,
            html: "",
            text: "",
            attachments: []
          },
          stored_data: { contact_id: "12345" },
          relationships: {
            user: {
              primary_email: "esweetland@gmail.com",
              emails: ["esweetland@gmail.com"],
              name: "Joe Schmoe",
              timezone: "America/Los_Angeles",
              preferred_date_format: "D, F jS Y g:ia T",
              preferred_date_format_js: "MMMM Do YYYY, h:mm a"
            },
            extension: {
              name: "New Gopher Express (Ngrok)",
              flag: "gopher-express-ngrok",
              stored_data: {
                gopher_token: "c1cd0d3cd124e289aa6ff0accf30e8362d259263"
              }
            }
          }
        },
        {
          id: 1075,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/d86214a2ba7397458eb2ba5f09e959c8/",
          created: 1515476238,
          reminder_time: null,
          reminder_timeformat: "",
          completed: false,
          completed_on: null,
          reference_email: {
            server_recipient: "test@gopher-express-ngrok.gopher.email",
            to: ["test@gopher-express-ngrok.gopher.email"],
            cc: [],
            bcc: [],
            from: "esweetland@gmail.com",
            reply_to: "",
            subject: null,
            html: "",
            text: "",
            attachments: []
          },
          stored_data: [],
          relationships: {
            user: {
              primary_email: "esweetland@gmail.com",
              emails: ["esweetland@gmail.com"],
              name: "Joe Schmoe",
              timezone: "America/Los_Angeles",
              preferred_date_format: "D, F jS Y g:ia T",
              preferred_date_format_js: "MMMM Do YYYY, h:mm a"
            },
            extension: {
              name: "New Gopher Express (Ngrok)",
              flag: "gopher-express-ngrok",
              stored_data: {
                gopher_token: "c1cd0d3cd124e289aa6ff0accf30e8362d259263"
              }
            }
          }
        },
        {
          id: 1076,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/aa40bcaac903a72f058d74d9c78e562a/",
          created: 1515476737,
          reminder_time: null,
          reminder_timeformat: "",
          completed: false,
          completed_on: null,
          reference_email: {
            server_recipient: "test@gopher-express-ngrok.gopher.email",
            to: ["test@gopher-express-ngrok.gopher.email"],
            cc: [],
            bcc: [],
            from: "esweetland@gmail.com",
            reply_to: "",
            subject: null,
            html: "",
            text: "",
            attachments: []
          },
          stored_data: { contact_id: "12345" },
          relationships: {
            user: {
              primary_email: "esweetland@gmail.com",
              emails: ["esweetland@gmail.com"],
              name: "Joe Schmoe",
              timezone: "America/Los_Angeles",
              preferred_date_format: "D, F jS Y g:ia T",
              preferred_date_format_js: "MMMM Do YYYY, h:mm a"
            },
            extension: {
              name: "New Gopher Express (Ngrok)",
              flag: "gopher-express-ngrok",
              stored_data: {
                gopher_token: "c1cd0d3cd124e289aa6ff0accf30e8362d259263"
              }
            }
          }
        },
        {
          id: 1077,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/4354833870614281785e64a96e98cf89/",
          created: 1515476976,
          reminder_time: null,
          reminder_timeformat: "",
          completed: false,
          completed_on: null,
          reference_email: {
            server_recipient: "test@gopher-express-ngrok.gopher.email",
            to: ["test@gopher-express-ngrok.gopher.email"],
            cc: [],
            bcc: [],
            from: "esweetland@gmail.com",
            reply_to: "",
            subject: null,
            html: "",
            text: "",
            attachments: []
          },
          stored_data: { contact_id: "12345" },
          relationships: {
            user: {
              primary_email: "esweetland@gmail.com",
              emails: ["esweetland@gmail.com"],
              name: "Joe Schmoe",
              timezone: "America/Los_Angeles",
              preferred_date_format: "D, F jS Y g:ia T",
              preferred_date_format_js: "MMMM Do YYYY, h:mm a"
            },
            extension: {
              name: "New Gopher Express (Ngrok)",
              flag: "gopher-express-ngrok",
              stored_data: {
                gopher_token: "c1cd0d3cd124e289aa6ff0accf30e8362d259263"
              }
            }
          }
        },
        {
          id: 1078,
          trigger_url:
            "http://local.gopher.email/api/v1/trigger/a3e937ccc4d35958c496d44c895d972b/",
          created: 1515477056,
          reminder_time: null,
          reminder_timeformat: "",
          completed: false,
          completed_on: null,
          reference_email: {
            server_recipient: "test@gopher-express-ngrok.gopher.email",
            to: ["test@gopher-express-ngrok.gopher.email"],
            cc: [],
            bcc: [],
            from: "esweetland@gmail.com",
            reply_to: "",
            subject: null,
            html: "",
            text: "",
            attachments: []
          },
          stored_data: { contact_id: "12345" },
          relationships: {
            user: {
              primary_email: "esweetland@gmail.com",
              emails: ["esweetland@gmail.com"],
              name: "Joe Schmoe",
              timezone: "America/Los_Angeles",
              preferred_date_format: "D, F jS Y g:ia T",
              preferred_date_format_js: "MMMM Do YYYY, h:mm a"
            },
            extension: {
              name: "New Gopher Express (Ngrok)",
              flag: "gopher-express-ngrok",
              stored_data: {
                gopher_token: "c1cd0d3cd124e289aa6ff0accf30e8362d259263"
              }
            }
          }
        }
      ]
    },
    [
      "Date",
      "Mon, 22 Jan 2018 07:37:42 GMT",
      "Server",
      "Apache/2.4.10 (Debian)",
      "Cache-Control",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "Access-Control-Allow-Headers",
      "authorization, Content-Type, cache-control, postman-token",
      "Access-Control-Allow-Methods",
      "GET, POST, PUT ,DELETE, OPTIONS",
      "Content-Length",
      "7138",
      "Connection",
      "close",
      "Content-Type",
      "application/json"
    ]
  );

nock("http://local.gopher.email:80", { encodedQueryParams: true })
  .get("/api/v1/tasks/1071/")
  .reply(
    200,
    {
      status: "success",
      task: {
        id: 1071,
        trigger_url:
          "http://local.gopher.email/api/v1/trigger/40ab883c48e2b4ef8b981ff71954b2e4/",
        created: 1515474322,
        reminder_time: null,
        reminder_timeformat: "",
        completed: false,
        completed_on: null,
        reference_email: {
          server_recipient: "test@gopher-express-ngrok.gopher.email",
          to: ["test@gopher-express-ngrok.gopher.email"],
          cc: [],
          bcc: [],
          from: "esweetland@gmail.com",
          reply_to: "",
          subject: "",
          html: "",
          text: "",
          attachments: []
        },
        stored_data: { contact_id: "12345" },
        relationships: {
          user: {
            primary_email: "esweetland@gmail.com",
            emails: ["esweetland@gmail.com"],
            name: "Joe Schmoe",
            timezone: "America/Los_Angeles",
            preferred_date_format: "D, F jS Y g:ia T",
            preferred_date_format_js: "MMMM Do YYYY, h:mm a"
          },
          extension: {
            name: "New Gopher Express (Ngrok)",
            flag: "gopher-express-ngrok",
            stored_data: {
              gopher_token: "c1cd0d3cd124e289aa6ff0accf30e8362d259263"
            }
          }
        }
      }
    },
    [
      "Date",
      "Mon, 22 Jan 2018 07:37:47 GMT",
      "Server",
      "Apache/2.4.10 (Debian)",
      "Cache-Control",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "Access-Control-Allow-Headers",
      "authorization, Content-Type, cache-control, postman-token",
      "Access-Control-Allow-Methods",
      "GET, POST, PUT ,DELETE, OPTIONS",
      "Content-Length",
      "921",
      "Connection",
      "close",
      "Content-Type",
      "application/json"
    ]
  );

nock("http://local.gopher.email:80", { encodedQueryParams: true })
  .put("/api/v1/tasks/1071/", {
    task: { reference_email: { body: "something else new" } }
  })
  .reply(
    200,
    {
      status: "success",
      task: {
        id: 1071,
        trigger_url:
          "http://local.gopher.email/api/v1/trigger/40ab883c48e2b4ef8b981ff71954b2e4/",
        created: 1515474322,
        reminder_time: null,
        reminder_timeformat: "",
        completed: false,
        completed_on: null,
        reference_email: {
          server_recipient: "test@gopher-express-ngrok.gopher.email",
          to: ["test@gopher-express-ngrok.gopher.email"],
          cc: [],
          bcc: [],
          from: "esweetland@gmail.com",
          reply_to: "",
          subject: "",
          html: "",
          text: "",
          attachments: []
        },
        stored_data: { contact_id: "12345" },
        relationships: {
          user: {
            primary_email: "esweetland@gmail.com",
            emails: ["esweetland@gmail.com"],
            name: "Joe Schmoe",
            timezone: "America/Los_Angeles",
            preferred_date_format: "D, F jS Y g:ia T",
            preferred_date_format_js: "MMMM Do YYYY, h:mm a"
          },
          extension: {
            name: "New Gopher Express (Ngrok)",
            flag: "gopher-express-ngrok",
            stored_data: {
              gopher_token: "c1cd0d3cd124e289aa6ff0accf30e8362d259263"
            }
          }
        }
      },
      messages: []
    },
    [
      "Date",
      "Mon, 22 Jan 2018 07:37:50 GMT",
      "Server",
      "Apache/2.4.10 (Debian)",
      "Cache-Control",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "Access-Control-Allow-Headers",
      "authorization, Content-Type, cache-control, postman-token",
      "Access-Control-Allow-Methods",
      "GET, POST, PUT ,DELETE, OPTIONS",
      "Content-Length",
      "935",
      "Connection",
      "close",
      "Content-Type",
      "application/json"
    ]
  );

nock("http://local.gopher.email:80", { encodedQueryParams: true })
  .post("/api/v1/extensions/self/data/", { three: "more" })
  .reply(
    200,
    {
      status: "success",
      data: {
        three: "more",
        evernote_access_token: "abc",
        more_new_data: "def",
        foo: "bar"
      },
      user: {
        name: "Joe Schmoe",
        email: "esweetland@gmail.com",
        timezone: "America/Los_Angeles"
      }
    },
    [
      "Date",
      "Mon, 22 Jan 2018 07:37:52 GMT",
      "Server",
      "Apache/2.4.10 (Debian)",
      "Cache-Control",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "Access-Control-Allow-Headers",
      "authorization, Content-Type, cache-control, postman-token",
      "Access-Control-Allow-Methods",
      "GET, POST, PUT ,DELETE, OPTIONS",
      "Content-Length",
      "202",
      "Connection",
      "close",
      "Content-Type",
      "application/json"
    ]
  );

nock("http://local.gopher.email:80", { encodedQueryParams: true })
  .get("/api/v1/extensions/self/data/")
  .reply(
    200,
    {
      status: "success",
      data: {
        three: "more",
        evernote_access_token: "abc",
        more_new_data: "def",
        foo: "bar"
      },
      user: {
        name: "Joe Schmoe",
        email: "esweetland@gmail.com",
        timezone: "America/Los_Angeles"
      }
    },
    [
      "Date",
      "Mon, 22 Jan 2018 07:37:53 GMT",
      "Server",
      "Apache/2.4.10 (Debian)",
      "Cache-Control",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "Access-Control-Allow-Headers",
      "authorization, Content-Type, cache-control, postman-token",
      "Access-Control-Allow-Methods",
      "GET, POST, PUT ,DELETE, OPTIONS",
      "Content-Length",
      "202",
      "Connection",
      "close",
      "Content-Type",
      "application/json"
    ]
  );

nock("http://local.gopher.email:80", { encodedQueryParams: true })
  .get("/api/v1/natural_time")
  .query({ format: "1day", method: "bcc", timezone: "America%2FLos_Angeles" })
  .reply(
    200,
    {
      status: "success",
      valid: true,
      time: "2018-01-22 23:37:54 PST",
      time_gmt: "2018-01-23 07:37:54",
      time_ts: "1516693074",
      recurring: false
    },
    [
      "Date",
      "Mon, 22 Jan 2018 07:37:54 GMT",
      "Server",
      "Apache/2.4.10 (Debian)",
      "Cache-Control",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "Access-Control-Allow-Headers",
      "authorization, Content-Type, cache-control, postman-token",
      "Access-Control-Allow-Methods",
      "GET, POST, PUT ,DELETE, OPTIONS",
      "Content-Length",
      "140",
      "Connection",
      "close",
      "Content-Type",
      "application/json"
    ]
  );

nock("http://local.gopher.email:80", { encodedQueryParams: true })
  .post("/api/v1/invites/", {
    client_id: "ext_be659a394e913e1cd0019053bb6b0e86",
    email_address: "test@example.com"
  })
  .reply(200, { status: "success" }, [
    "Date",
    "Mon, 22 Jan 2018 07:37:54 GMT",
    "Server",
    "Apache/2.4.10 (Debian)",
    "Cache-Control",
    "no-cache",
    "Access-Control-Allow-Origin",
    "*",
    "Access-Control-Allow-Headers",
    "authorization, Content-Type, cache-control, postman-token",
    "Access-Control-Allow-Methods",
    "GET, POST, PUT ,DELETE, OPTIONS",
    "Content-Length",
    "20",
    "Connection",
    "close",
    "Content-Type",
    "application/json"
  ]);

nock("http://local.gopher.email:80", { encodedQueryParams: true })
  .post("/api/v1/invites/", {
    client_id: "ext_be659a394e913e1cd0019053bb6b0e86",
    email_address: "test@example.com"
  })
  .reply(200, { status: "success" }, [
    "Date",
    "Mon, 22 Jan 2018 07:37:56 GMT",
    "Server",
    "Apache/2.4.10 (Debian)",
    "Set-Cookie",
    "PHPSESSID=qfm9oas7sprtvq3d5agklnjbi7; path=/",
    "Expires",
    "Thu, 19 Nov 1981 08:52:00 GMT",
    "Cache-Control",
    "no-store, no-cache, must-revalidate, post-check=0, pre-check=0",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "no-cache",
    "Access-Control-Allow-Origin",
    "*",
    "Access-Control-Allow-Headers",
    "authorization, Content-Type, cache-control, postman-token",
    "Access-Control-Allow-Methods",
    "GET, POST, PUT ,DELETE, OPTIONS",
    "Content-Length",
    "20",
    "Connection",
    "close",
    "Content-Type",
    "application/json"
  ]);

nock("http://local.gopher.email:80", { encodedQueryParams: true })
  .post("/api/v1/invites/", {
    client_id: "ext_be659a394e913e1cd0019053bb6b0e86",
    email_address: ["blackhole@example.com", "blackhole2@example.com"]
  })
  .reply(200, { status: "success" }, [
    "Date",
    "Mon, 22 Jan 2018 07:37:57 GMT",
    "Server",
    "Apache/2.4.10 (Debian)",
    "Set-Cookie",
    "PHPSESSID=mditmkt46169sjtdnrjmg17kp0; path=/",
    "Expires",
    "Thu, 19 Nov 1981 08:52:00 GMT",
    "Cache-Control",
    "no-store, no-cache, must-revalidate, post-check=0, pre-check=0",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "no-cache",
    "Access-Control-Allow-Origin",
    "*",
    "Access-Control-Allow-Headers",
    "authorization, Content-Type, cache-control, postman-token",
    "Access-Control-Allow-Methods",
    "GET, POST, PUT ,DELETE, OPTIONS",
    "Content-Length",
    "20",
    "Connection",
    "close",
    "Content-Type",
    "application/json"
  ]);

nock("http://local.gopher.email:80", { encodedQueryParams: true })
  .post("/api/v1/tasks/", {
    task: {
      command: "test@gopher-express-ngrok.gopher.email",
      reminder_timeformat: "1sec",
      reference_email: {
        server_recipient: "test@gopher-express-ngrok.gopher.email",
        to: ["test@gopher-express-ngrok.gopher.email"],
        cc: [],
        bcc: [],
        from: "bar@bar.email",
        subject: "Test1",
        html: "Test1",
        text: "Test1",
        attachments: []
      },
      stored_data: { privatedata1: "Value1" }
    }
  })
  .reply(401, { message: "Your login information was incorrect." }, [
    "Date",
    "Mon, 22 Jan 2018 07:37:58 GMT",
    "Server",
    "Apache/2.4.10 (Debian)",
    "Cache-Control",
    "no-cache",
    "Access-Control-Allow-Origin",
    "*",
    "Access-Control-Allow-Headers",
    "authorization, Content-Type, cache-control, postman-token",
    "Access-Control-Allow-Methods",
    "GET, POST, PUT ,DELETE, OPTIONS",
    "Content-Length",
    "51",
    "Connection",
    "close",
    "Content-Type",
    "application/json"
  ]);

nock("http://local.gopher.email:80", { encodedQueryParams: true })
  .post("/api/v1/auth/register", {
    email: "9736@example.com",
    password: "fdsafdsa",
    name: "",
    timezone: ""
  })
  .reply(
    200,
    {
      status: "success",
      user: {
        email: "9736@example.com",
        token: {
          access_token: "9145ecba4dbbb96e856dab0f9e18e9ed23730f87",
          expires_in: 0,
          token_type: "Bearer",
          scope: "get_user_info manage_user_self"
        }
      }
    },
    [
      "Date",
      "Mon, 22 Jan 2018 07:37:59 GMT",
      "Server",
      "Apache/2.4.10 (Debian)",
      "Cache-Control",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "Access-Control-Allow-Headers",
      "authorization, Content-Type, cache-control, postman-token",
      "Access-Control-Allow-Methods",
      "GET, POST, PUT ,DELETE, OPTIONS",
      "Content-Length",
      "202",
      "Connection",
      "close",
      "Content-Type",
      "application/json"
    ]
  );

nock("http://local.gopher.email:80", { encodedQueryParams: true })
  .post("/api/v1/auth/login", {
    email: "9736@example.com",
    password: "fdsafdsa"
  })
  .reply(
    200,
    {
      status: "success",
      user: {
        email: "9736@example.com",
        token: {
          access_token: "f07911fc85ae788655c043ec4eba603d57780d67",
          expires_in: 0,
          token_type: "Bearer",
          scope:
            "get_user_info extension_manage_self manage_tasks read_tasks read_logs manage_logs read_services manage_extensions read_extensions manage_user_self"
        }
      }
    },
    [
      "Date",
      "Mon, 22 Jan 2018 07:38:01 GMT",
      "Server",
      "Apache/2.4.10 (Debian)",
      "Cache-Control",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "Access-Control-Allow-Headers",
      "authorization, Content-Type, cache-control, postman-token",
      "Access-Control-Allow-Methods",
      "GET, POST, PUT ,DELETE, OPTIONS",
      "Content-Length",
      "318",
      "Connection",
      "close",
      "Content-Type",
      "application/json"
    ]
  );

nock("http://local.gopher.email:80", { encodedQueryParams: true })
  .post("/api/v1/auth/forgot_password", { email: "9736@example.com" })
  .reply(200, { status: "success" }, [
    "Date",
    "Mon, 22 Jan 2018 07:38:01 GMT",
    "Server",
    "Apache/2.4.10 (Debian)",
    "Cache-Control",
    "no-cache",
    "Access-Control-Allow-Origin",
    "*",
    "Access-Control-Allow-Headers",
    "authorization, Content-Type, cache-control, postman-token",
    "Access-Control-Allow-Methods",
    "GET, POST, PUT ,DELETE, OPTIONS",
    "Content-Length",
    "20",
    "Connection",
    "close",
    "Content-Type",
    "application/json"
  ]);

nock("http://local.gopher.email:80", { encodedQueryParams: true })
  .get("/api/v1/logs")
  .reply(
    200,
    {
      status: "success",
      logs: [
        {
          id: 13755,
          date: "2018-01-22 07:37:51",
          type: "webhook",
          extension: "gopher-express-ngrok",
          extension_ownerid: 2,
          taskId: 1071,
          userId: 2,
          event: "webhook success: task.updated",
          data: [],
          http_request_url: "http://gopher-express-ngrok.ngrok.io/webhooks",
          http_request_method: "POST",
          http_request_headers: {
            Host: ["gopher-express-ngrok.ngrok.io"],
            "X-Gopher-Timestamp": [1516606670],
            "X-Gopher-Signature": [
              "afb61cb068ee009ffcaa7dc1bebd66082c12ad764714c085f2858f3aec90ac4b"
            ],
            "User-Agent": ["Gopher (http://www.gopher.email)"],
            "Content-Type": ["application/json"],
            "Content-Length": [870]
          },
          http_request_body:
            '{"event":"task.updated","version":1,"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","developer_name":"","help_url":"","stored_data":{"gopher_token":"c1cd0d3cd124e289aa6ff0accf30e8362d259263"}},"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Joe Schmoe","timezone":"America\\/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"MMMM Do YYYY, h:mm a"},"task":{"created":1515474322,"completed":false,"completed_on":"","id":1071,"reminder_time":"0000-00-00 00:00:00","reminder_timeformat":"","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"stored_data":{"contact_id":"12345"}}}',
          http_response_headers: {
            "X-Powered-By": ["Express"],
            "Content-Type": ["application/json; charset=utf-8"],
            "Content-Length": ["2941"],
            ETag: ['W/"b7d-0fJzk5IcjotfMJQm0u88w0ZEecU"'],
            Date: ["Mon, 22 Jan 2018 07:37:45 GMT"]
          },
          http_response_body:
            '{"version":1,"task":{"reference_email":{"to":[],"cc":[],"bcc":[],"from":"","subject":"","html":""},"stored_data":{"contact_id":"12345"}},"response":[{"type":"email","to":"esweetland@gmail.com","cc":"","bcc":"","from":"Sender Name","subject":"A Custom Email Subject From Gopher","reply_to":{"action":"arbitrary.data.string"},"body":[{"type":"soft-error","text":"Give the user an error here"},{"type":"title","ext":"A Great Title"},{"type":"section","title":"DESCRIPTION"},{"type":"html","text":"Include images, HTML or other items here. \\n                        <p> Deflector power at maximum. Energy discharge in six seconds. Warp reactor core primary coolant failure. Fluctuate phaser resonance frequencies. Resistance is futile. Recommend we adjust shield harmonics to the upper EM band when proceeding. These appear to be some kind of power-wave-guide conduits which allow them to work collectively as they perform ship functions. Increase deflector modulation to upper frequency band.</p>\\n                        <p>I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.</p>\\n                        <p>Sensors indicate no shuttle or other ships in this sector. According to coordinates, we have travelled 7,000 light years and are located near the system J-25. Tractor beam released, sir. Force field maintaining our hull integrity. Damage report? Sections 27, 28 and 29 on decks four, five and six destroyed. Without our shields, at this range it is probable a photon detonation could destroy the Enterprise.</p>"},{"type":"section","title":"button styles"},{"type":"button","text":"Primary","style":"primary","url":"https://www.github.com"},{"type":"button","text":"Secondary)","url":"https://www.github.com"},{"type":"button","text":"Press Me","url":"https://www.github.com"},{"type":"section","title":"block buttons"},{"type":"button","text":"Action Email","action":"notifications.off","subject":"Hit Send to Turn off Confirmation Emails","body":"name: %0A amount: %0A tag [network, colo, hosting]: %0A probability[1-10]: %0A%0A%0A--%0AThis is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox.","style":"block primary"},{"type":"button","text":"Action Email: Turn off confirmations","action":"notifications.off","style":"block","subject":"Hit Send to Turn off Confirmation Emails","body":"This is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox."},{"type":"html","text":"<table width=\\"100%\\" border=\\"0\\"><tr><td></td></tr></table>"}]}]}',
          http_response_statuscode: 200
        },
        {
          id: 13753,
          date: "2018-01-22 07:37:48",
          type: "webhook",
          extension: "gopher-express-ngrok",
          extension_ownerid: 2,
          taskId: 1071,
          userId: 2,
          event: "webhook success: task.viewed",
          data: [],
          http_request_url: "http://gopher-express-ngrok.ngrok.io/webhooks",
          http_request_method: "POST",
          http_request_headers: {
            Host: ["gopher-express-ngrok.ngrok.io"],
            "X-Gopher-Timestamp": [1516606667],
            "X-Gopher-Signature": [
              "57c78b3d2187c53fd650f752b3042220c7a93a43748d8c4b79fa4866b5aec459"
            ],
            "User-Agent": ["Gopher (http://www.gopher.email)"],
            "Content-Type": ["application/json"],
            "Content-Length": [869]
          },
          http_request_body:
            '{"event":"task.viewed","version":1,"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","developer_name":"","help_url":"","stored_data":{"gopher_token":"c1cd0d3cd124e289aa6ff0accf30e8362d259263"}},"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Joe Schmoe","timezone":"America\\/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"MMMM Do YYYY, h:mm a"},"task":{"created":1515474322,"completed":false,"completed_on":"","id":1071,"reminder_time":"0000-00-00 00:00:00","reminder_timeformat":"","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"stored_data":{"contact_id":"12345"}}}',
          http_response_headers: {
            "X-Powered-By": ["Express"],
            "Content-Type": ["application/json; charset=utf-8"],
            "Content-Length": ["2941"],
            ETag: ['W/"b7d-0fJzk5IcjotfMJQm0u88w0ZEecU"'],
            Date: ["Mon, 22 Jan 2018 07:37:42 GMT"]
          },
          http_response_body:
            '{"version":1,"task":{"reference_email":{"to":[],"cc":[],"bcc":[],"from":"","subject":"","html":""},"stored_data":{"contact_id":"12345"}},"response":[{"type":"email","to":"esweetland@gmail.com","cc":"","bcc":"","from":"Sender Name","subject":"A Custom Email Subject From Gopher","reply_to":{"action":"arbitrary.data.string"},"body":[{"type":"soft-error","text":"Give the user an error here"},{"type":"title","ext":"A Great Title"},{"type":"section","title":"DESCRIPTION"},{"type":"html","text":"Include images, HTML or other items here. \\n                        <p> Deflector power at maximum. Energy discharge in six seconds. Warp reactor core primary coolant failure. Fluctuate phaser resonance frequencies. Resistance is futile. Recommend we adjust shield harmonics to the upper EM band when proceeding. These appear to be some kind of power-wave-guide conduits which allow them to work collectively as they perform ship functions. Increase deflector modulation to upper frequency band.</p>\\n                        <p>I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.</p>\\n                        <p>Sensors indicate no shuttle or other ships in this sector. According to coordinates, we have travelled 7,000 light years and are located near the system J-25. Tractor beam released, sir. Force field maintaining our hull integrity. Damage report? Sections 27, 28 and 29 on decks four, five and six destroyed. Without our shields, at this range it is probable a photon detonation could destroy the Enterprise.</p>"},{"type":"section","title":"button styles"},{"type":"button","text":"Primary","style":"primary","url":"https://www.github.com"},{"type":"button","text":"Secondary)","url":"https://www.github.com"},{"type":"button","text":"Press Me","url":"https://www.github.com"},{"type":"section","title":"block buttons"},{"type":"button","text":"Action Email","action":"notifications.off","subject":"Hit Send to Turn off Confirmation Emails","body":"name: %0A amount: %0A tag [network, colo, hosting]: %0A probability[1-10]: %0A%0A%0A--%0AThis is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox.","style":"block primary"},{"type":"button","text":"Action Email: Turn off confirmations","action":"notifications.off","style":"block","subject":"Hit Send to Turn off Confirmation Emails","body":"This is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox."},{"type":"html","text":"<table width=\\"100%\\" border=\\"0\\"><tr><td></td></tr></table>"}]}]}',
          http_response_statuscode: 200
        },
        {
          id: 13748,
          date: "2018-01-22 07:37:31",
          type: "webhook",
          extension: "gopher-express-ngrok",
          extension_ownerid: 2,
          taskId: 1663,
          userId: 2,
          event: "webhook success: task.created",
          data: [],
          http_request_url: "http://gopher-express-ngrok.ngrok.io/webhooks",
          http_request_method: "POST",
          http_request_headers: {
            Host: ["gopher-express-ngrok.ngrok.io"],
            "X-Gopher-Timestamp": [1516606650],
            "X-Gopher-Signature": [
              "6b2bb367d769ab4ae0177eeb01f0f88023ebf7f07db8063604b1d301d5a4b4d8"
            ],
            "User-Agent": ["Gopher (http://www.gopher.email)"],
            "Content-Type": ["application/json"],
            "Content-Length": [1640]
          },
          http_request_body:
            '{"command":{"format":"test-c@gopher-express-ngrok.gopher.email","flag":"gopher-express-ngrok","params":["test-c"],"source":{"type":"email","recipient":"test-c@gopher-express-ngrok.gopher.email","from":"esweetland@gmail.com","method":"bcc","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"subject":"Test1","html":"Test1","text":"Test1","headers":{"authorization":"Bearer 1457f06e32a8123843c2041cff205e3408b89b25","accept":"application\\/json, text\\/plain, *\\/*","content-type":"application\\/json","user-agent":"axios\\/0.17.1","content-length":"365","host":"local.gopher.email","connection":"close","x-php-ob-level":"1","to":"test@gopher-express-ngrok.gopher.email","cc":"","bcc":"","subject":"Test1","from":"esweetland@gmail.com"}}},"event":"task.created","version":1,"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","developer_name":"","help_url":"","stored_data":{"gopher_token":"c1cd0d3cd124e289aa6ff0accf30e8362d259263"}},"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Joe Schmoe","timezone":"America\\/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"MMMM Do YYYY, h:mm a"},"task":{"created":1516606648,"completed":false,"completed_on":"","id":1663,"reminder_time":"2018-01-22 07:52:28","reminder_timeformat":"15min","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}}',
          http_response_headers: {
            "X-Powered-By": ["Express"],
            "Content-Type": ["application/json; charset=utf-8"],
            "Content-Length": ["2941"],
            ETag: ['W/"b7d-0fJzk5IcjotfMJQm0u88w0ZEecU"'],
            Date: ["Mon, 22 Jan 2018 07:37:25 GMT"]
          },
          http_response_body:
            '{"version":1,"task":{"reference_email":{"to":[],"cc":[],"bcc":[],"from":"","subject":"","html":""},"stored_data":{"contact_id":"12345"}},"response":[{"type":"email","to":"esweetland@gmail.com","cc":"","bcc":"","from":"Sender Name","subject":"A Custom Email Subject From Gopher","reply_to":{"action":"arbitrary.data.string"},"body":[{"type":"soft-error","text":"Give the user an error here"},{"type":"title","ext":"A Great Title"},{"type":"section","title":"DESCRIPTION"},{"type":"html","text":"Include images, HTML or other items here. \\n                        <p> Deflector power at maximum. Energy discharge in six seconds. Warp reactor core primary coolant failure. Fluctuate phaser resonance frequencies. Resistance is futile. Recommend we adjust shield harmonics to the upper EM band when proceeding. These appear to be some kind of power-wave-guide conduits which allow them to work collectively as they perform ship functions. Increase deflector modulation to upper frequency band.</p>\\n                        <p>I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.</p>\\n                        <p>Sensors indicate no shuttle or other ships in this sector. According to coordinates, we have travelled 7,000 light years and are located near the system J-25. Tractor beam released, sir. Force field maintaining our hull integrity. Damage report? Sections 27, 28 and 29 on decks four, five and six destroyed. Without our shields, at this range it is probable a photon detonation could destroy the Enterprise.</p>"},{"type":"section","title":"button styles"},{"type":"button","text":"Primary","style":"primary","url":"https://www.github.com"},{"type":"button","text":"Secondary)","url":"https://www.github.com"},{"type":"button","text":"Press Me","url":"https://www.github.com"},{"type":"section","title":"block buttons"},{"type":"button","text":"Action Email","action":"notifications.off","subject":"Hit Send to Turn off Confirmation Emails","body":"name: %0A amount: %0A tag [network, colo, hosting]: %0A probability[1-10]: %0A%0A%0A--%0AThis is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox.","style":"block primary"},{"type":"button","text":"Action Email: Turn off confirmations","action":"notifications.off","style":"block","subject":"Hit Send to Turn off Confirmation Emails","body":"This is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox."},{"type":"html","text":"<table width=\\"100%\\" border=\\"0\\"><tr><td></td></tr></table>"}]}]}',
          http_response_statuscode: 200
        },
        {
          id: 13729,
          date: "2018-01-22 07:22:51",
          type: "webhook",
          extension: "gopher-express-ngrok",
          extension_ownerid: 2,
          taskId: 1662,
          userId: 2,
          event: "webhook success: task.created",
          data: [],
          http_request_url: "http://gopher-express-ngrok.ngrok.io/webhooks",
          http_request_method: "POST",
          http_request_headers: {
            Host: ["gopher-express-ngrok.ngrok.io"],
            "X-Gopher-Timestamp": [1516605770],
            "X-Gopher-Signature": [
              "9656df1f9d2a8f034fb010495f7c4ba8fdf8cf7511d91cc2375d4da4612ab709"
            ],
            "User-Agent": ["Gopher (http://www.gopher.email)"],
            "Content-Type": ["application/json"],
            "Content-Length": [1640]
          },
          http_request_body:
            '{"command":{"format":"test-c@gopher-express-ngrok.gopher.email","flag":"gopher-express-ngrok","params":["test-c"],"source":{"type":"email","recipient":"test-c@gopher-express-ngrok.gopher.email","from":"esweetland@gmail.com","method":"bcc","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"subject":"Test1","html":"Test1","text":"Test1","headers":{"authorization":"Bearer 1457f06e32a8123843c2041cff205e3408b89b25","accept":"application\\/json, text\\/plain, *\\/*","content-type":"application\\/json","user-agent":"axios\\/0.17.1","content-length":"365","host":"local.gopher.email","connection":"close","x-php-ob-level":"1","to":"test@gopher-express-ngrok.gopher.email","cc":"","bcc":"","subject":"Test1","from":"esweetland@gmail.com"}}},"event":"task.created","version":1,"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","developer_name":"","help_url":"","stored_data":{"gopher_token":"c1cd0d3cd124e289aa6ff0accf30e8362d259263"}},"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Joe Schmoe","timezone":"America\\/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"MMMM Do YYYY, h:mm a"},"task":{"created":1516605768,"completed":false,"completed_on":"","id":1662,"reminder_time":"2018-01-22 07:37:48","reminder_timeformat":"15min","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}}',
          http_response_headers: {
            "X-Powered-By": ["Express"],
            "Content-Type": ["application/json; charset=utf-8"],
            "Content-Length": ["2941"],
            ETag: ['W/"b7d-0fJzk5IcjotfMJQm0u88w0ZEecU"'],
            Date: ["Mon, 22 Jan 2018 07:22:46 GMT"]
          },
          http_response_body:
            '{"version":1,"task":{"reference_email":{"to":[],"cc":[],"bcc":[],"from":"","subject":"","html":""},"stored_data":{"contact_id":"12345"}},"response":[{"type":"email","to":"esweetland@gmail.com","cc":"","bcc":"","from":"Sender Name","subject":"A Custom Email Subject From Gopher","reply_to":{"action":"arbitrary.data.string"},"body":[{"type":"soft-error","text":"Give the user an error here"},{"type":"title","ext":"A Great Title"},{"type":"section","title":"DESCRIPTION"},{"type":"html","text":"Include images, HTML or other items here. \\n                        <p> Deflector power at maximum. Energy discharge in six seconds. Warp reactor core primary coolant failure. Fluctuate phaser resonance frequencies. Resistance is futile. Recommend we adjust shield harmonics to the upper EM band when proceeding. These appear to be some kind of power-wave-guide conduits which allow them to work collectively as they perform ship functions. Increase deflector modulation to upper frequency band.</p>\\n                        <p>I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.</p>\\n                        <p>Sensors indicate no shuttle or other ships in this sector. According to coordinates, we have travelled 7,000 light years and are located near the system J-25. Tractor beam released, sir. Force field maintaining our hull integrity. Damage report? Sections 27, 28 and 29 on decks four, five and six destroyed. Without our shields, at this range it is probable a photon detonation could destroy the Enterprise.</p>"},{"type":"section","title":"button styles"},{"type":"button","text":"Primary","style":"primary","url":"https://www.github.com"},{"type":"button","text":"Secondary)","url":"https://www.github.com"},{"type":"button","text":"Press Me","url":"https://www.github.com"},{"type":"section","title":"block buttons"},{"type":"button","text":"Action Email","action":"notifications.off","subject":"Hit Send to Turn off Confirmation Emails","body":"name: %0A amount: %0A tag [network, colo, hosting]: %0A probability[1-10]: %0A%0A%0A--%0AThis is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox.","style":"block primary"},{"type":"button","text":"Action Email: Turn off confirmations","action":"notifications.off","style":"block","subject":"Hit Send to Turn off Confirmation Emails","body":"This is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox."},{"type":"html","text":"<table width=\\"100%\\" border=\\"0\\"><tr><td></td></tr></table>"}]}]}',
          http_response_statuscode: 200
        },
        {
          id: 13721,
          date: "2018-01-22 07:22:46",
          type: "webhook",
          extension: "gopher-express-ngrok",
          extension_ownerid: 2,
          taskId: 1661,
          userId: 2,
          event: "webhook success: task.created",
          data: [],
          http_request_url: "http://gopher-express-ngrok.ngrok.io/webhooks",
          http_request_method: "POST",
          http_request_headers: {
            Host: ["gopher-express-ngrok.ngrok.io"],
            "X-Gopher-Timestamp": [1516605765],
            "X-Gopher-Signature": [
              "91cee988ee42c8377e53c64f48caa733fa645c492995dd47df8d6f368544b074"
            ],
            "User-Agent": ["Gopher (http://www.gopher.email)"],
            "Content-Type": ["application/json"],
            "Content-Length": [1640]
          },
          http_request_body:
            '{"command":{"format":"test-c@gopher-express-ngrok.gopher.email","flag":"gopher-express-ngrok","params":["test-c"],"source":{"type":"email","recipient":"test-c@gopher-express-ngrok.gopher.email","from":"esweetland@gmail.com","method":"bcc","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"subject":"Test1","html":"Test1","text":"Test1","headers":{"authorization":"Bearer 1457f06e32a8123843c2041cff205e3408b89b25","accept":"application\\/json, text\\/plain, *\\/*","content-type":"application\\/json","user-agent":"axios\\/0.17.1","content-length":"365","host":"local.gopher.email","connection":"close","x-php-ob-level":"1","to":"test@gopher-express-ngrok.gopher.email","cc":"","bcc":"","subject":"Test1","from":"esweetland@gmail.com"}}},"event":"task.created","version":1,"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","developer_name":"","help_url":"","stored_data":{"gopher_token":"c1cd0d3cd124e289aa6ff0accf30e8362d259263"}},"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Joe Schmoe","timezone":"America\\/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"MMMM Do YYYY, h:mm a"},"task":{"created":1516605764,"completed":false,"completed_on":"","id":1661,"reminder_time":"2018-01-22 07:37:44","reminder_timeformat":"15min","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}}',
          http_response_headers: {
            "X-Powered-By": ["Express"],
            "Content-Type": ["application/json; charset=utf-8"],
            "Content-Length": ["2941"],
            ETag: ['W/"b7d-0fJzk5IcjotfMJQm0u88w0ZEecU"'],
            Date: ["Mon, 22 Jan 2018 07:22:41 GMT"]
          },
          http_response_body:
            '{"version":1,"task":{"reference_email":{"to":[],"cc":[],"bcc":[],"from":"","subject":"","html":""},"stored_data":{"contact_id":"12345"}},"response":[{"type":"email","to":"esweetland@gmail.com","cc":"","bcc":"","from":"Sender Name","subject":"A Custom Email Subject From Gopher","reply_to":{"action":"arbitrary.data.string"},"body":[{"type":"soft-error","text":"Give the user an error here"},{"type":"title","ext":"A Great Title"},{"type":"section","title":"DESCRIPTION"},{"type":"html","text":"Include images, HTML or other items here. \\n                        <p> Deflector power at maximum. Energy discharge in six seconds. Warp reactor core primary coolant failure. Fluctuate phaser resonance frequencies. Resistance is futile. Recommend we adjust shield harmonics to the upper EM band when proceeding. These appear to be some kind of power-wave-guide conduits which allow them to work collectively as they perform ship functions. Increase deflector modulation to upper frequency band.</p>\\n                        <p>I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.</p>\\n                        <p>Sensors indicate no shuttle or other ships in this sector. According to coordinates, we have travelled 7,000 light years and are located near the system J-25. Tractor beam released, sir. Force field maintaining our hull integrity. Damage report? Sections 27, 28 and 29 on decks four, five and six destroyed. Without our shields, at this range it is probable a photon detonation could destroy the Enterprise.</p>"},{"type":"section","title":"button styles"},{"type":"button","text":"Primary","style":"primary","url":"https://www.github.com"},{"type":"button","text":"Secondary)","url":"https://www.github.com"},{"type":"button","text":"Press Me","url":"https://www.github.com"},{"type":"section","title":"block buttons"},{"type":"button","text":"Action Email","action":"notifications.off","subject":"Hit Send to Turn off Confirmation Emails","body":"name: %0A amount: %0A tag [network, colo, hosting]: %0A probability[1-10]: %0A%0A%0A--%0AThis is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox.","style":"block primary"},{"type":"button","text":"Action Email: Turn off confirmations","action":"notifications.off","style":"block","subject":"Hit Send to Turn off Confirmation Emails","body":"This is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox."},{"type":"html","text":"<table width=\\"100%\\" border=\\"0\\"><tr><td></td></tr></table>"}]}]}',
          http_response_statuscode: 200
        },
        {
          id: 13707,
          date: "2018-01-22 07:22:13",
          type: "webhook",
          extension: "gopher-express-ngrok",
          extension_ownerid: 2,
          taskId: 1071,
          userId: 2,
          event: "webhook success: task.updated",
          data: [],
          http_request_url: "http://gopher-express-ngrok.ngrok.io/webhooks",
          http_request_method: "POST",
          http_request_headers: {
            Host: ["gopher-express-ngrok.ngrok.io"],
            "X-Gopher-Timestamp": [1516605732],
            "X-Gopher-Signature": [
              "9a0b37e3841e38bb684976cd14b4a17bea6a6bfaf1576e4ec86b1820e4216e62"
            ],
            "User-Agent": ["Gopher (http://www.gopher.email)"],
            "Content-Type": ["application/json"],
            "Content-Length": [870]
          },
          http_request_body:
            '{"event":"task.updated","version":1,"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","developer_name":"","help_url":"","stored_data":{"gopher_token":"c1cd0d3cd124e289aa6ff0accf30e8362d259263"}},"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Joe Schmoe","timezone":"America\\/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"MMMM Do YYYY, h:mm a"},"task":{"created":1515474322,"completed":false,"completed_on":"","id":1071,"reminder_time":"0000-00-00 00:00:00","reminder_timeformat":"","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"stored_data":{"contact_id":"12345"}}}',
          http_response_headers: {
            "X-Powered-By": ["Express"],
            "Content-Type": ["application/json; charset=utf-8"],
            "Content-Length": ["2941"],
            ETag: ['W/"b7d-0fJzk5IcjotfMJQm0u88w0ZEecU"'],
            Date: ["Mon, 22 Jan 2018 07:22:08 GMT"]
          },
          http_response_body:
            '{"version":1,"task":{"reference_email":{"to":[],"cc":[],"bcc":[],"from":"","subject":"","html":""},"stored_data":{"contact_id":"12345"}},"response":[{"type":"email","to":"esweetland@gmail.com","cc":"","bcc":"","from":"Sender Name","subject":"A Custom Email Subject From Gopher","reply_to":{"action":"arbitrary.data.string"},"body":[{"type":"soft-error","text":"Give the user an error here"},{"type":"title","ext":"A Great Title"},{"type":"section","title":"DESCRIPTION"},{"type":"html","text":"Include images, HTML or other items here. \\n                        <p> Deflector power at maximum. Energy discharge in six seconds. Warp reactor core primary coolant failure. Fluctuate phaser resonance frequencies. Resistance is futile. Recommend we adjust shield harmonics to the upper EM band when proceeding. These appear to be some kind of power-wave-guide conduits which allow them to work collectively as they perform ship functions. Increase deflector modulation to upper frequency band.</p>\\n                        <p>I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.</p>\\n                        <p>Sensors indicate no shuttle or other ships in this sector. According to coordinates, we have travelled 7,000 light years and are located near the system J-25. Tractor beam released, sir. Force field maintaining our hull integrity. Damage report? Sections 27, 28 and 29 on decks four, five and six destroyed. Without our shields, at this range it is probable a photon detonation could destroy the Enterprise.</p>"},{"type":"section","title":"button styles"},{"type":"button","text":"Primary","style":"primary","url":"https://www.github.com"},{"type":"button","text":"Secondary)","url":"https://www.github.com"},{"type":"button","text":"Press Me","url":"https://www.github.com"},{"type":"section","title":"block buttons"},{"type":"button","text":"Action Email","action":"notifications.off","subject":"Hit Send to Turn off Confirmation Emails","body":"name: %0A amount: %0A tag [network, colo, hosting]: %0A probability[1-10]: %0A%0A%0A--%0AThis is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox.","style":"block primary"},{"type":"button","text":"Action Email: Turn off confirmations","action":"notifications.off","style":"block","subject":"Hit Send to Turn off Confirmation Emails","body":"This is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox."},{"type":"html","text":"<table width=\\"100%\\" border=\\"0\\"><tr><td></td></tr></table>"}]}]}',
          http_response_statuscode: 200
        },
        {
          id: 13705,
          date: "2018-01-22 07:22:11",
          type: "webhook",
          extension: "gopher-express-ngrok",
          extension_ownerid: 2,
          taskId: 1071,
          userId: 2,
          event: "webhook success: task.viewed",
          data: [],
          http_request_url: "http://gopher-express-ngrok.ngrok.io/webhooks",
          http_request_method: "POST",
          http_request_headers: {
            Host: ["gopher-express-ngrok.ngrok.io"],
            "X-Gopher-Timestamp": [1516605730],
            "X-Gopher-Signature": [
              "fe89efd42959f918bc6e7fd540ee7c04be6395069601da7dc3f74c9bb233c8cc"
            ],
            "User-Agent": ["Gopher (http://www.gopher.email)"],
            "Content-Type": ["application/json"],
            "Content-Length": [869]
          },
          http_request_body:
            '{"event":"task.viewed","version":1,"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","developer_name":"","help_url":"","stored_data":{"gopher_token":"c1cd0d3cd124e289aa6ff0accf30e8362d259263"}},"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Joe Schmoe","timezone":"America\\/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"MMMM Do YYYY, h:mm a"},"task":{"created":1515474322,"completed":false,"completed_on":"","id":1071,"reminder_time":"0000-00-00 00:00:00","reminder_timeformat":"","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"stored_data":{"contact_id":"12345"}}}',
          http_response_headers: {
            "X-Powered-By": ["Express"],
            "Content-Type": ["application/json; charset=utf-8"],
            "Content-Length": ["2941"],
            ETag: ['W/"b7d-0fJzk5IcjotfMJQm0u88w0ZEecU"'],
            Date: ["Mon, 22 Jan 2018 07:22:06 GMT"]
          },
          http_response_body:
            '{"version":1,"task":{"reference_email":{"to":[],"cc":[],"bcc":[],"from":"","subject":"","html":""},"stored_data":{"contact_id":"12345"}},"response":[{"type":"email","to":"esweetland@gmail.com","cc":"","bcc":"","from":"Sender Name","subject":"A Custom Email Subject From Gopher","reply_to":{"action":"arbitrary.data.string"},"body":[{"type":"soft-error","text":"Give the user an error here"},{"type":"title","ext":"A Great Title"},{"type":"section","title":"DESCRIPTION"},{"type":"html","text":"Include images, HTML or other items here. \\n                        <p> Deflector power at maximum. Energy discharge in six seconds. Warp reactor core primary coolant failure. Fluctuate phaser resonance frequencies. Resistance is futile. Recommend we adjust shield harmonics to the upper EM band when proceeding. These appear to be some kind of power-wave-guide conduits which allow them to work collectively as they perform ship functions. Increase deflector modulation to upper frequency band.</p>\\n                        <p>I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.</p>\\n                        <p>Sensors indicate no shuttle or other ships in this sector. According to coordinates, we have travelled 7,000 light years and are located near the system J-25. Tractor beam released, sir. Force field maintaining our hull integrity. Damage report? Sections 27, 28 and 29 on decks four, five and six destroyed. Without our shields, at this range it is probable a photon detonation could destroy the Enterprise.</p>"},{"type":"section","title":"button styles"},{"type":"button","text":"Primary","style":"primary","url":"https://www.github.com"},{"type":"button","text":"Secondary)","url":"https://www.github.com"},{"type":"button","text":"Press Me","url":"https://www.github.com"},{"type":"section","title":"block buttons"},{"type":"button","text":"Action Email","action":"notifications.off","subject":"Hit Send to Turn off Confirmation Emails","body":"name: %0A amount: %0A tag [network, colo, hosting]: %0A probability[1-10]: %0A%0A%0A--%0AThis is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox.","style":"block primary"},{"type":"button","text":"Action Email: Turn off confirmations","action":"notifications.off","style":"block","subject":"Hit Send to Turn off Confirmation Emails","body":"This is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox."},{"type":"html","text":"<table width=\\"100%\\" border=\\"0\\"><tr><td></td></tr></table>"}]}]}',
          http_response_statuscode: 200
        },
        {
          id: 13700,
          date: "2018-01-22 07:21:55",
          type: "webhook",
          extension: "gopher-express-ngrok",
          extension_ownerid: 2,
          taskId: 1660,
          userId: 2,
          event: "webhook success: task.created",
          data: [],
          http_request_url: "http://gopher-express-ngrok.ngrok.io/webhooks",
          http_request_method: "POST",
          http_request_headers: {
            Host: ["gopher-express-ngrok.ngrok.io"],
            "X-Gopher-Timestamp": [1516605714],
            "X-Gopher-Signature": [
              "24e36b7764868272bcabd856385fb054880f2b6f06b1491a6e1a3ad70abb67db"
            ],
            "User-Agent": ["Gopher (http://www.gopher.email)"],
            "Content-Type": ["application/json"],
            "Content-Length": [1640]
          },
          http_request_body:
            '{"command":{"format":"test-c@gopher-express-ngrok.gopher.email","flag":"gopher-express-ngrok","params":["test-c"],"source":{"type":"email","recipient":"test-c@gopher-express-ngrok.gopher.email","from":"esweetland@gmail.com","method":"bcc","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"subject":"Test1","html":"Test1","text":"Test1","headers":{"authorization":"Bearer 1457f06e32a8123843c2041cff205e3408b89b25","accept":"application\\/json, text\\/plain, *\\/*","content-type":"application\\/json","user-agent":"axios\\/0.17.1","content-length":"365","host":"local.gopher.email","connection":"close","x-php-ob-level":"1","to":"test@gopher-express-ngrok.gopher.email","cc":"","bcc":"","subject":"Test1","from":"esweetland@gmail.com"}}},"event":"task.created","version":1,"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","developer_name":"","help_url":"","stored_data":{"gopher_token":"c1cd0d3cd124e289aa6ff0accf30e8362d259263"}},"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Joe Schmoe","timezone":"America\\/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"MMMM Do YYYY, h:mm a"},"task":{"created":1516605713,"completed":false,"completed_on":"","id":1660,"reminder_time":"2018-01-22 07:36:53","reminder_timeformat":"15min","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}}',
          http_response_headers: {
            "X-Powered-By": ["Express"],
            "Content-Type": ["application/json; charset=utf-8"],
            "Content-Length": ["2941"],
            ETag: ['W/"b7d-0fJzk5IcjotfMJQm0u88w0ZEecU"'],
            Date: ["Mon, 22 Jan 2018 07:21:50 GMT"]
          },
          http_response_body:
            '{"version":1,"task":{"reference_email":{"to":[],"cc":[],"bcc":[],"from":"","subject":"","html":""},"stored_data":{"contact_id":"12345"}},"response":[{"type":"email","to":"esweetland@gmail.com","cc":"","bcc":"","from":"Sender Name","subject":"A Custom Email Subject From Gopher","reply_to":{"action":"arbitrary.data.string"},"body":[{"type":"soft-error","text":"Give the user an error here"},{"type":"title","ext":"A Great Title"},{"type":"section","title":"DESCRIPTION"},{"type":"html","text":"Include images, HTML or other items here. \\n                        <p> Deflector power at maximum. Energy discharge in six seconds. Warp reactor core primary coolant failure. Fluctuate phaser resonance frequencies. Resistance is futile. Recommend we adjust shield harmonics to the upper EM band when proceeding. These appear to be some kind of power-wave-guide conduits which allow them to work collectively as they perform ship functions. Increase deflector modulation to upper frequency band.</p>\\n                        <p>I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.</p>\\n                        <p>Sensors indicate no shuttle or other ships in this sector. According to coordinates, we have travelled 7,000 light years and are located near the system J-25. Tractor beam released, sir. Force field maintaining our hull integrity. Damage report? Sections 27, 28 and 29 on decks four, five and six destroyed. Without our shields, at this range it is probable a photon detonation could destroy the Enterprise.</p>"},{"type":"section","title":"button styles"},{"type":"button","text":"Primary","style":"primary","url":"https://www.github.com"},{"type":"button","text":"Secondary)","url":"https://www.github.com"},{"type":"button","text":"Press Me","url":"https://www.github.com"},{"type":"section","title":"block buttons"},{"type":"button","text":"Action Email","action":"notifications.off","subject":"Hit Send to Turn off Confirmation Emails","body":"name: %0A amount: %0A tag [network, colo, hosting]: %0A probability[1-10]: %0A%0A%0A--%0AThis is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox.","style":"block primary"},{"type":"button","text":"Action Email: Turn off confirmations","action":"notifications.off","style":"block","subject":"Hit Send to Turn off Confirmation Emails","body":"This is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox."},{"type":"html","text":"<table width=\\"100%\\" border=\\"0\\"><tr><td></td></tr></table>"}]}]}',
          http_response_statuscode: 200
        },
        {
          id: 13692,
          date: "2018-01-22 07:18:12",
          type: "webhook",
          extension: "gopher-express-ngrok",
          extension_ownerid: 2,
          taskId: 1659,
          userId: 2,
          event: "webhook success: task.created",
          data: [],
          http_request_url: "http://gopher-express-ngrok.ngrok.io/webhooks",
          http_request_method: "POST",
          http_request_headers: {
            Host: ["gopher-express-ngrok.ngrok.io"],
            "X-Gopher-Timestamp": [1516605491],
            "X-Gopher-Signature": [
              "e8531adc529457a576e944347e90ab1ff6b45baedc23afe3629cddd756122d05"
            ],
            "User-Agent": ["Gopher (http://www.gopher.email)"],
            "Content-Type": ["application/json"],
            "Content-Length": [1640]
          },
          http_request_body:
            '{"command":{"format":"test-c@gopher-express-ngrok.gopher.email","flag":"gopher-express-ngrok","params":["test-c"],"source":{"type":"email","recipient":"test-c@gopher-express-ngrok.gopher.email","from":"esweetland@gmail.com","method":"bcc","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"subject":"Test1","html":"Test1","text":"Test1","headers":{"authorization":"Bearer 1457f06e32a8123843c2041cff205e3408b89b25","accept":"application\\/json, text\\/plain, *\\/*","content-type":"application\\/json","user-agent":"axios\\/0.17.1","content-length":"365","host":"local.gopher.email","connection":"close","x-php-ob-level":"1","to":"test@gopher-express-ngrok.gopher.email","cc":"","bcc":"","subject":"Test1","from":"esweetland@gmail.com"}}},"event":"task.created","version":1,"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","developer_name":"","help_url":"","stored_data":{"gopher_token":"c1cd0d3cd124e289aa6ff0accf30e8362d259263"}},"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Joe Schmoe","timezone":"America\\/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"MMMM Do YYYY, h:mm a"},"task":{"created":1516605490,"completed":false,"completed_on":"","id":1659,"reminder_time":"2018-01-22 07:33:10","reminder_timeformat":"15min","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}}',
          http_response_headers: {
            "X-Powered-By": ["Express"],
            "Content-Type": ["application/json; charset=utf-8"],
            "Content-Length": ["2941"],
            ETag: ['W/"b7d-0fJzk5IcjotfMJQm0u88w0ZEecU"'],
            Date: ["Mon, 22 Jan 2018 07:18:07 GMT"]
          },
          http_response_body:
            '{"version":1,"task":{"reference_email":{"to":[],"cc":[],"bcc":[],"from":"","subject":"","html":""},"stored_data":{"contact_id":"12345"}},"response":[{"type":"email","to":"esweetland@gmail.com","cc":"","bcc":"","from":"Sender Name","subject":"A Custom Email Subject From Gopher","reply_to":{"action":"arbitrary.data.string"},"body":[{"type":"soft-error","text":"Give the user an error here"},{"type":"title","ext":"A Great Title"},{"type":"section","title":"DESCRIPTION"},{"type":"html","text":"Include images, HTML or other items here. \\n                        <p> Deflector power at maximum. Energy discharge in six seconds. Warp reactor core primary coolant failure. Fluctuate phaser resonance frequencies. Resistance is futile. Recommend we adjust shield harmonics to the upper EM band when proceeding. These appear to be some kind of power-wave-guide conduits which allow them to work collectively as they perform ship functions. Increase deflector modulation to upper frequency band.</p>\\n                        <p>I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.</p>\\n                        <p>Sensors indicate no shuttle or other ships in this sector. According to coordinates, we have travelled 7,000 light years and are located near the system J-25. Tractor beam released, sir. Force field maintaining our hull integrity. Damage report? Sections 27, 28 and 29 on decks four, five and six destroyed. Without our shields, at this range it is probable a photon detonation could destroy the Enterprise.</p>"},{"type":"section","title":"button styles"},{"type":"button","text":"Primary","style":"primary","url":"https://www.github.com"},{"type":"button","text":"Secondary)","url":"https://www.github.com"},{"type":"button","text":"Press Me","url":"https://www.github.com"},{"type":"section","title":"block buttons"},{"type":"button","text":"Action Email","action":"notifications.off","subject":"Hit Send to Turn off Confirmation Emails","body":"name: %0A amount: %0A tag [network, colo, hosting]: %0A probability[1-10]: %0A%0A%0A--%0AThis is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox.","style":"block primary"},{"type":"button","text":"Action Email: Turn off confirmations","action":"notifications.off","style":"block","subject":"Hit Send to Turn off Confirmation Emails","body":"This is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox."},{"type":"html","text":"<table width=\\"100%\\" border=\\"0\\"><tr><td></td></tr></table>"}]}]}',
          http_response_statuscode: 200
        },
        {
          id: 13690,
          date: "2018-01-22 07:17:15",
          type: "webhook",
          extension: "gopher-express-ngrok",
          extension_ownerid: 2,
          taskId: 1658,
          userId: 2,
          event: "webhook success: task.created",
          data: [],
          http_request_url: "http://gopher-express-ngrok.ngrok.io/webhooks",
          http_request_method: "POST",
          http_request_headers: {
            Host: ["gopher-express-ngrok.ngrok.io"],
            "X-Gopher-Timestamp": [1516605435],
            "X-Gopher-Signature": [
              "8180359240f3884c68e504580c6346b1ff0326de380005eb172c68abbf0cd74b"
            ],
            "User-Agent": ["Gopher (http://www.gopher.email)"],
            "Content-Type": ["application/json"],
            "Content-Length": [1640]
          },
          http_request_body:
            '{"command":{"format":"test-c@gopher-express-ngrok.gopher.email","flag":"gopher-express-ngrok","params":["test-c"],"source":{"type":"email","recipient":"test-c@gopher-express-ngrok.gopher.email","from":"esweetland@gmail.com","method":"bcc","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"subject":"Test1","html":"Test1","text":"Test1","headers":{"authorization":"Bearer 1457f06e32a8123843c2041cff205e3408b89b25","accept":"application\\/json, text\\/plain, *\\/*","content-type":"application\\/json","user-agent":"axios\\/0.17.1","content-length":"365","host":"local.gopher.email","connection":"close","x-php-ob-level":"1","to":"test@gopher-express-ngrok.gopher.email","cc":"","bcc":"","subject":"Test1","from":"esweetland@gmail.com"}}},"event":"task.created","version":1,"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","developer_name":"","help_url":"","stored_data":{"gopher_token":"c1cd0d3cd124e289aa6ff0accf30e8362d259263"}},"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Joe Schmoe","timezone":"America\\/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"MMMM Do YYYY, h:mm a"},"task":{"created":1516605433,"completed":false,"completed_on":"","id":1658,"reminder_time":"2018-01-22 07:32:13","reminder_timeformat":"15min","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}}',
          http_response_headers: {
            "X-Powered-By": ["Express"],
            "Content-Type": ["application/json; charset=utf-8"],
            "Content-Length": ["2941"],
            ETag: ['W/"b7d-0fJzk5IcjotfMJQm0u88w0ZEecU"'],
            Date: ["Mon, 22 Jan 2018 07:17:11 GMT"]
          },
          http_response_body:
            '{"version":1,"task":{"reference_email":{"to":[],"cc":[],"bcc":[],"from":"","subject":"","html":""},"stored_data":{"contact_id":"12345"}},"response":[{"type":"email","to":"esweetland@gmail.com","cc":"","bcc":"","from":"Sender Name","subject":"A Custom Email Subject From Gopher","reply_to":{"action":"arbitrary.data.string"},"body":[{"type":"soft-error","text":"Give the user an error here"},{"type":"title","ext":"A Great Title"},{"type":"section","title":"DESCRIPTION"},{"type":"html","text":"Include images, HTML or other items here. \\n                        <p> Deflector power at maximum. Energy discharge in six seconds. Warp reactor core primary coolant failure. Fluctuate phaser resonance frequencies. Resistance is futile. Recommend we adjust shield harmonics to the upper EM band when proceeding. These appear to be some kind of power-wave-guide conduits which allow them to work collectively as they perform ship functions. Increase deflector modulation to upper frequency band.</p>\\n                        <p>I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.</p>\\n                        <p>Sensors indicate no shuttle or other ships in this sector. According to coordinates, we have travelled 7,000 light years and are located near the system J-25. Tractor beam released, sir. Force field maintaining our hull integrity. Damage report? Sections 27, 28 and 29 on decks four, five and six destroyed. Without our shields, at this range it is probable a photon detonation could destroy the Enterprise.</p>"},{"type":"section","title":"button styles"},{"type":"button","text":"Primary","style":"primary","url":"https://www.github.com"},{"type":"button","text":"Secondary)","url":"https://www.github.com"},{"type":"button","text":"Press Me","url":"https://www.github.com"},{"type":"section","title":"block buttons"},{"type":"button","text":"Action Email","action":"notifications.off","subject":"Hit Send to Turn off Confirmation Emails","body":"name: %0A amount: %0A tag [network, colo, hosting]: %0A probability[1-10]: %0A%0A%0A--%0AThis is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox.","style":"block primary"},{"type":"button","text":"Action Email: Turn off confirmations","action":"notifications.off","style":"block","subject":"Hit Send to Turn off Confirmation Emails","body":"This is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox."},{"type":"html","text":"<table width=\\"100%\\" border=\\"0\\"><tr><td></td></tr></table>"}]}]}',
          http_response_statuscode: 200
        },
        {
          id: 13688,
          date: "2018-01-22 07:14:49",
          type: "webhook",
          extension: "gopher-express-ngrok",
          extension_ownerid: 2,
          taskId: 1657,
          userId: 2,
          event: "webhook success: task.created",
          data: [],
          http_request_url: "http://gopher-express-ngrok.ngrok.io/webhooks",
          http_request_method: "POST",
          http_request_headers: {
            Host: ["gopher-express-ngrok.ngrok.io"],
            "X-Gopher-Timestamp": [1516605288],
            "X-Gopher-Signature": [
              "0d34bafb7cff8446a6753a9ec5938892b04fe414cff92c543c3d40c3e1284109"
            ],
            "User-Agent": ["Gopher (http://www.gopher.email)"],
            "Content-Type": ["application/json"],
            "Content-Length": [2751]
          },
          http_request_body:
            '{"command":{"format":"test-c@gopher-express-ngrok.gopher.email","flag":"gopher-express-ngrok","params":["test-c"],"source":{"type":"email","recipient":"test-c@gopher-express-ngrok.gopher.email","from":"esweetland@gmail.com","method":"bcc","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"subject":"Test1","html":"Test1","text":"Test1","headers":{"authorization":"Bearer 1457f06e32a8123843c2041cff205e3408b89b25","content-type":"application\\/json","cache-control":"no-cache","postman-token":"e9bfb38d-f509-41b3-ac5e-658396f77623","user-agent":"PostmanRuntime\\/7.1.1","accept":"*\\/*","host":"local.gopher.email","cookie":"mp_4a9d89164f13f9771f7e3a5399902816_mixpanel=%7B%22distinct_id%22%3A%20%2215f93ca1a1b829-062bf4a931536d-2f392a62-13c680-15f93ca1a1c9be%22%2C%22%24initial_referrer%22%3A%20%22http%3A%2F%2Flocal.gopher.email%2Fsettings%2Foauth2_authorize%3Fresponse_type%3Dcode%26state%3D1234%26client_id%3Dext_e0256879c211eadf0b429933c8dcbdf4%26scope%3Dget_user_info%2520extension_manage_self%2520manage_reminders%2520read_reminders%2520manage_logs%2520read_logs%2520read_tasks%2520manage_tasks%2520manage_extensions%26redirect_uri%3Dhttps%253A%252F%252Fwww.getpostman.com%252Foauth2%252Fcallback%22%2C%22%24initial_referring_domain%22%3A%20%22local.gopher.email%22%7D; intercom-id-j0igcs5c=939028a1-bef7-46de-98e3-fd5ec5bdcd5d; PHPSESSID=9u6bt0nr5p8vqgleq5h50rnfg0; sToken=3514b921872c8bb5e6dcaa3e35b88ba77453815c; fut_emails=%5B%22esweetland%40gmail.com%22%5D; _ga=GA1.3.442842220.1510011834; __ar_v4=6I7VBGQXQ5DIDL7UYRQ3C3%3A20171106%3A6%7C4KHAUNXDGZAGBEUGX5JSMS%3A20171106%3A6%7CP4P3JQKYWNG77HABYJH7U4%3A20171106%3A6","accept-encoding":"gzip, deflate","content-length":"494","connection":"keep-alive","x-php-ob-level":"1","to":"test@gopher-express-ngrok.gopher.email","cc":"","bcc":"","subject":"Test1","from":"esweetland@gmail.com"}}},"event":"task.created","version":1,"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","developer_name":"","help_url":"","stored_data":{"gopher_token":"c1cd0d3cd124e289aa6ff0accf30e8362d259263"}},"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Joe Schmoe","timezone":"America\\/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"MMMM Do YYYY, h:mm a"},"task":{"created":1516605286,"completed":false,"completed_on":"","id":1657,"reminder_time":"2018-01-22 07:29:46","reminder_timeformat":"15min","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}}',
          http_response_headers: {
            "X-Powered-By": ["Express"],
            "Content-Type": ["application/json; charset=utf-8"],
            "Content-Length": ["2941"],
            ETag: ['W/"b7d-0fJzk5IcjotfMJQm0u88w0ZEecU"'],
            Date: ["Mon, 22 Jan 2018 07:14:44 GMT"]
          },
          http_response_body:
            '{"version":1,"task":{"reference_email":{"to":[],"cc":[],"bcc":[],"from":"","subject":"","html":""},"stored_data":{"contact_id":"12345"}},"response":[{"type":"email","to":"esweetland@gmail.com","cc":"","bcc":"","from":"Sender Name","subject":"A Custom Email Subject From Gopher","reply_to":{"action":"arbitrary.data.string"},"body":[{"type":"soft-error","text":"Give the user an error here"},{"type":"title","ext":"A Great Title"},{"type":"section","title":"DESCRIPTION"},{"type":"html","text":"Include images, HTML or other items here. \\n                        <p> Deflector power at maximum. Energy discharge in six seconds. Warp reactor core primary coolant failure. Fluctuate phaser resonance frequencies. Resistance is futile. Recommend we adjust shield harmonics to the upper EM band when proceeding. These appear to be some kind of power-wave-guide conduits which allow them to work collectively as they perform ship functions. Increase deflector modulation to upper frequency band.</p>\\n                        <p>I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.</p>\\n                        <p>Sensors indicate no shuttle or other ships in this sector. According to coordinates, we have travelled 7,000 light years and are located near the system J-25. Tractor beam released, sir. Force field maintaining our hull integrity. Damage report? Sections 27, 28 and 29 on decks four, five and six destroyed. Without our shields, at this range it is probable a photon detonation could destroy the Enterprise.</p>"},{"type":"section","title":"button styles"},{"type":"button","text":"Primary","style":"primary","url":"https://www.github.com"},{"type":"button","text":"Secondary)","url":"https://www.github.com"},{"type":"button","text":"Press Me","url":"https://www.github.com"},{"type":"section","title":"block buttons"},{"type":"button","text":"Action Email","action":"notifications.off","subject":"Hit Send to Turn off Confirmation Emails","body":"name: %0A amount: %0A tag [network, colo, hosting]: %0A probability[1-10]: %0A%0A%0A--%0AThis is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox.","style":"block primary"},{"type":"button","text":"Action Email: Turn off confirmations","action":"notifications.off","style":"block","subject":"Hit Send to Turn off Confirmation Emails","body":"This is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox."},{"type":"html","text":"<table width=\\"100%\\" border=\\"0\\"><tr><td></td></tr></table>"}]}]}',
          http_response_statuscode: 200
        },
        {
          id: 13686,
          date: "2018-01-22 07:13:37",
          type: "submit_failed",
          extension: "",
          extension_ownerid: 2,
          taskId: 0,
          userId: 2,
          event: "failed: invalid_format",
          data: {
            status: "error",
            type: "invalid_format",
            message: "Time format can not be empty",
            id: 1656
          },
          http_request_url: "http://local.gopher.email/api/v1/tasks/",
          http_request_method: "POST",
          http_request_headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            "user-agent": "axios/0.17.1",
            "content-length": "374",
            host: "local.gopher.email",
            connection: "close",
            "x-php-ob-level": "1"
          },
          http_request_body:
            '{"task":{"task":{"command":"test@gopher-express-ngrok.gopher.email","reminder_timeformat":"15min","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}}}',
          http_response_headers: {
            "cache-control": "no-cache",
            date: "Mon, 22 Jan 2018 07:13:37 GMT",
            "content-type": "application/json"
          },
          http_response_body:
            '{"status":"error","type":"invalid_format","message":"Time format can not be empty","id":1656}',
          http_response_statuscode: 400
        },
        {
          id: 13684,
          date: "2018-01-22 07:11:25",
          type: "submit_failed",
          extension: "",
          extension_ownerid: 2,
          taskId: 0,
          userId: 2,
          event: "failed: invalid_format",
          data: {
            status: "error",
            type: "invalid_format",
            message: "Time format can not be empty",
            id: 1655
          },
          http_request_url: "http://local.gopher.email/api/v1/tasks/",
          http_request_method: "POST",
          http_request_headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            "user-agent": "axios/0.17.1",
            "content-length": "374",
            host: "local.gopher.email",
            connection: "close",
            "x-php-ob-level": "1"
          },
          http_request_body:
            '{"task":{"task":{"command":"test@gopher-express-ngrok.gopher.email","reminder_timeformat":"15min","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}}}',
          http_response_headers: {
            "cache-control": "no-cache",
            date: "Mon, 22 Jan 2018 07:11:25 GMT",
            "content-type": "application/json"
          },
          http_response_body:
            '{"status":"error","type":"invalid_format","message":"Time format can not be empty","id":1655}',
          http_response_statuscode: 400
        },
        {
          id: 13682,
          date: "2018-01-22 07:11:14",
          type: "submit_failed",
          extension: "",
          extension_ownerid: 2,
          taskId: 0,
          userId: 2,
          event: "failed: invalid_format",
          data: {
            status: "error",
            type: "invalid_format",
            message: "Time format can not be empty",
            id: 1654
          },
          http_request_url: "http://local.gopher.email/api/v1/tasks/",
          http_request_method: "POST",
          http_request_headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            "user-agent": "axios/0.17.1",
            "content-length": "342",
            host: "local.gopher.email",
            connection: "close",
            "x-php-ob-level": "1"
          },
          http_request_body:
            '{"task":{"task":{"command":"test@gopher-express-ngrok.gopher.email","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":"test@gopher-express-ngrok.gopher.email","cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}}}',
          http_response_headers: {
            "cache-control": "no-cache",
            date: "Mon, 22 Jan 2018 07:11:14 GMT",
            "content-type": "application/json"
          },
          http_response_body:
            '{"status":"error","type":"invalid_format","message":"Time format can not be empty","id":1654}',
          http_response_statuscode: 400
        },
        {
          id: 13680,
          date: "2018-01-22 07:10:01",
          type: "submit_failed",
          extension: "",
          extension_ownerid: 2,
          taskId: 0,
          userId: 2,
          event: "failed: invalid_format",
          data: {
            status: "error",
            type: "invalid_format",
            message: "Time format can not be empty",
            id: 1653
          },
          http_request_url: "http://local.gopher.email/api/v1/tasks/",
          http_request_method: "POST",
          http_request_headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            "user-agent": "axios/0.17.1",
            "content-length": "344",
            host: "local.gopher.email",
            connection: "close",
            "x-php-ob-level": "1"
          },
          http_request_body:
            '{"task":{"task":{"command":"test@gopher-express-ngrok.gopher.email","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}}}',
          http_response_headers: {
            "cache-control": "no-cache",
            date: "Mon, 22 Jan 2018 07:10:01 GMT",
            "content-type": "application/json"
          },
          http_response_body:
            '{"status":"error","type":"invalid_format","message":"Time format can not be empty","id":1653}',
          http_response_statuscode: 400
        },
        {
          id: 13678,
          date: "2018-01-22 07:09:55",
          type: "submit_failed",
          extension: "",
          extension_ownerid: 2,
          taskId: 0,
          userId: 2,
          event: "failed: invalid_format",
          data: {
            status: "error",
            type: "invalid_format",
            message: "Time format can not be empty",
            id: 1652
          },
          http_request_url: "http://local.gopher.email/api/v1/tasks/",
          http_request_method: "POST",
          http_request_headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            "user-agent": "axios/0.17.1",
            "content-length": "374",
            host: "local.gopher.email",
            connection: "close",
            "x-php-ob-level": "1"
          },
          http_request_body:
            '{"task":{"task":{"command":"test@gopher-express-ngrok.gopher.email","reminder_timeformat":"15min","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}}}',
          http_response_headers: {
            "cache-control": "no-cache",
            date: "Mon, 22 Jan 2018 07:09:55 GMT",
            "content-type": "application/json"
          },
          http_response_body:
            '{"status":"error","type":"invalid_format","message":"Time format can not be empty","id":1652}',
          http_response_statuscode: 400
        },
        {
          id: 13676,
          date: "2018-01-22 07:09:04",
          type: "submit_failed",
          extension: "",
          extension_ownerid: 2,
          taskId: 0,
          userId: 2,
          event: "failed: invalid_format",
          data: {
            status: "error",
            type: "invalid_format",
            message: "Time format can not be empty",
            id: 1651
          },
          http_request_url: "http://local.gopher.email/api/v1/tasks/",
          http_request_method: "POST",
          http_request_headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            "user-agent": "axios/0.17.1",
            "content-length": "373",
            host: "local.gopher.email",
            connection: "close",
            "x-php-ob-level": "1"
          },
          http_request_body:
            '{"task":{"task":{"command":"test@gopher-express-ngrok.gopher.email","reminder_timeformat":"1sec","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}}}',
          http_response_headers: {
            "cache-control": "no-cache",
            date: "Mon, 22 Jan 2018 07:09:04 GMT",
            "content-type": "application/json"
          },
          http_response_body:
            '{"status":"error","type":"invalid_format","message":"Time format can not be empty","id":1651}',
          http_response_statuscode: 400
        },
        {
          id: 13674,
          date: "2018-01-22 07:08:54",
          type: "submit_failed",
          extension: "",
          extension_ownerid: 2,
          taskId: 0,
          userId: 2,
          event: "failed: invalid_format",
          data: {
            status: "error",
            type: "invalid_format",
            message: "Time format can not be empty",
            id: 1650
          },
          http_request_url: "http://local.gopher.email/api/v1/tasks/",
          http_request_method: "POST",
          http_request_headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            "user-agent": "axios/0.17.1",
            "content-length": "373",
            host: "local.gopher.email",
            connection: "close",
            "x-php-ob-level": "1"
          },
          http_request_body:
            '{"task":{"task":{"command":"test@gopher-express-ngrok.gopher.email","reminder_timeformat":"1sec","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}}}',
          http_response_headers: {
            "cache-control": "no-cache",
            date: "Mon, 22 Jan 2018 07:08:54 GMT",
            "content-type": "application/json"
          },
          http_response_body:
            '{"status":"error","type":"invalid_format","message":"Time format can not be empty","id":1650}',
          http_response_statuscode: 400
        },
        {
          id: 13672,
          date: "2018-01-22 07:07:56",
          type: "submit_failed",
          extension: "",
          extension_ownerid: 2,
          taskId: 0,
          userId: 2,
          event: "failed: invalid_format",
          data: {
            status: "error",
            type: "invalid_format",
            message: "Time format can not be empty",
            id: 1649
          },
          http_request_url: "http://local.gopher.email/api/v1/tasks/",
          http_request_method: "POST",
          http_request_headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            "user-agent": "axios/0.17.1",
            "content-length": "373",
            host: "local.gopher.email",
            connection: "close",
            "x-php-ob-level": "1"
          },
          http_request_body:
            '{"task":{"task":{"command":"test@gopher-express-ngrok.gopher.email","reminder_timeformat":"1sec","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}}}',
          http_response_headers: {
            "cache-control": "no-cache",
            date: "Mon, 22 Jan 2018 07:07:56 GMT",
            "content-type": "application/json"
          },
          http_response_body:
            '{"status":"error","type":"invalid_format","message":"Time format can not be empty","id":1649}',
          http_response_statuscode: 400
        },
        {
          id: 13670,
          date: "2018-01-22 07:07:31",
          type: "submit_failed",
          extension: "",
          extension_ownerid: 2,
          taskId: 0,
          userId: 2,
          event: "failed: invalid_format",
          data: {
            status: "error",
            type: "invalid_format",
            message: "Time format can not be empty",
            id: 1648
          },
          http_request_url: "http://local.gopher.email/api/v1/tasks/",
          http_request_method: "POST",
          http_request_headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            "user-agent": "axios/0.17.1",
            "content-length": "373",
            host: "local.gopher.email",
            connection: "close",
            "x-php-ob-level": "1"
          },
          http_request_body:
            '{"task":{"task":{"command":"test@gopher-express-ngrok.gopher.email","reminder_timeformat":"1sec","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}}}',
          http_response_headers: {
            "cache-control": "no-cache",
            date: "Mon, 22 Jan 2018 07:07:31 GMT",
            "content-type": "application/json"
          },
          http_response_body:
            '{"status":"error","type":"invalid_format","message":"Time format can not be empty","id":1648}',
          http_response_statuscode: 400
        },
        {
          id: 13668,
          date: "2018-01-22 07:05:41",
          type: "submit_failed",
          extension: "",
          extension_ownerid: 2,
          taskId: 0,
          userId: 2,
          event: "failed: invalid_format",
          data: {
            status: "error",
            type: "invalid_format",
            message: "Time format can not be empty",
            id: 1647
          },
          http_request_url: "http://local.gopher.email/api/v1/tasks/",
          http_request_method: "POST",
          http_request_headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            "user-agent": "axios/0.17.1",
            "content-length": "373",
            host: "local.gopher.email",
            connection: "close",
            "x-php-ob-level": "1"
          },
          http_request_body:
            '{"task":{"task":{"command":"test@gopher-express-ngrok.gopher.email","reminder_timeformat":"1sec","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}}}',
          http_response_headers: {
            "cache-control": "no-cache",
            date: "Mon, 22 Jan 2018 07:05:41 GMT",
            "content-type": "application/json"
          },
          http_response_body:
            '{"status":"error","type":"invalid_format","message":"Time format can not be empty","id":1647}',
          http_response_statuscode: 400
        },
        {
          id: 13666,
          date: "2018-01-22 07:05:35",
          type: "submit_failed",
          extension: "",
          extension_ownerid: 2,
          taskId: 0,
          userId: 2,
          event: "failed: invalid_format",
          data: {
            status: "error",
            type: "invalid_format",
            message: "Time format can not be empty",
            id: 1646
          },
          http_request_url: "http://local.gopher.email/api/v1/tasks/",
          http_request_method: "POST",
          http_request_headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            "user-agent": "axios/0.17.1",
            "content-length": "373",
            host: "local.gopher.email",
            connection: "close",
            "x-php-ob-level": "1"
          },
          http_request_body:
            '{"task":{"task":{"command":"test@gopher-express-ngrok.gopher.email","reminder_timeformat":"1sec","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}}}',
          http_response_headers: {
            "cache-control": "no-cache",
            date: "Mon, 22 Jan 2018 07:05:35 GMT",
            "content-type": "application/json"
          },
          http_response_body:
            '{"status":"error","type":"invalid_format","message":"Time format can not be empty","id":1646}',
          http_response_statuscode: 400
        },
        {
          id: 13664,
          date: "2018-01-22 07:05:28",
          type: "submit_failed",
          extension: "",
          extension_ownerid: 2,
          taskId: 0,
          userId: 2,
          event: "failed: invalid_format",
          data: {
            status: "error",
            type: "invalid_format",
            message: "Time format can not be empty",
            id: 1645
          },
          http_request_url: "http://local.gopher.email/api/v1/tasks/",
          http_request_method: "POST",
          http_request_headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            "user-agent": "axios/0.17.1",
            "content-length": "373",
            host: "local.gopher.email",
            connection: "close",
            "x-php-ob-level": "1"
          },
          http_request_body:
            '{"task":{"task":{"command":"test@gopher-express-ngrok.gopher.email","reminder_timeformat":"1sec","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}}}',
          http_response_headers: {
            "cache-control": "no-cache",
            date: "Mon, 22 Jan 2018 07:05:28 GMT",
            "content-type": "application/json"
          },
          http_response_body:
            '{"status":"error","type":"invalid_format","message":"Time format can not be empty","id":1645}',
          http_response_statuscode: 400
        },
        {
          id: 13662,
          date: "2018-01-22 07:04:51",
          type: "webhook",
          extension: "gopher-express-ngrok",
          extension_ownerid: 2,
          taskId: 1644,
          userId: 2,
          event: "webhook success: task.created",
          data: [],
          http_request_url: "http://gopher-express-ngrok.ngrok.io/webhooks",
          http_request_method: "POST",
          http_request_headers: {
            Host: ["gopher-express-ngrok.ngrok.io"],
            "X-Gopher-Timestamp": [1516604691],
            "X-Gopher-Signature": [
              "d9f857d64681286f4282b6a8f762a54c18c8dc17f6a6e85cebe3414c206e0a4c"
            ],
            "User-Agent": ["Gopher (http://www.gopher.email)"],
            "Content-Type": ["application/json"],
            "Content-Length": [1639]
          },
          http_request_body:
            '{"command":{"format":"test-c@gopher-express-ngrok.gopher.email","flag":"gopher-express-ngrok","params":["test-c"],"source":{"type":"email","recipient":"test-c@gopher-express-ngrok.gopher.email","from":"esweetland@gmail.com","method":"bcc","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"subject":"Test1","html":"Test1","text":"Test1","headers":{"authorization":"Bearer 1457f06e32a8123843c2041cff205e3408b89b25","accept":"application\\/json, text\\/plain, *\\/*","content-type":"application\\/json","user-agent":"axios\\/0.17.1","content-length":"364","host":"local.gopher.email","connection":"close","x-php-ob-level":"1","to":"test@gopher-express-ngrok.gopher.email","cc":"","bcc":"","subject":"Test1","from":"esweetland@gmail.com"}}},"event":"task.created","version":1,"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","developer_name":"","help_url":"","stored_data":{"gopher_token":"c1cd0d3cd124e289aa6ff0accf30e8362d259263"}},"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Joe Schmoe","timezone":"America\\/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"MMMM Do YYYY, h:mm a"},"task":{"created":1516604690,"completed":false,"completed_on":"","id":1644,"reminder_time":"2018-01-22 07:04:51","reminder_timeformat":"1sec","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}}',
          http_response_headers: {
            "X-Powered-By": ["Express"],
            "Content-Type": ["application/json; charset=utf-8"],
            "Content-Length": ["2941"],
            ETag: ['W/"b7d-0fJzk5IcjotfMJQm0u88w0ZEecU"'],
            Date: ["Mon, 22 Jan 2018 07:04:47 GMT"]
          },
          http_response_body:
            '{"version":1,"task":{"reference_email":{"to":[],"cc":[],"bcc":[],"from":"","subject":"","html":""},"stored_data":{"contact_id":"12345"}},"response":[{"type":"email","to":"esweetland@gmail.com","cc":"","bcc":"","from":"Sender Name","subject":"A Custom Email Subject From Gopher","reply_to":{"action":"arbitrary.data.string"},"body":[{"type":"soft-error","text":"Give the user an error here"},{"type":"title","ext":"A Great Title"},{"type":"section","title":"DESCRIPTION"},{"type":"html","text":"Include images, HTML or other items here. \\n                        <p> Deflector power at maximum. Energy discharge in six seconds. Warp reactor core primary coolant failure. Fluctuate phaser resonance frequencies. Resistance is futile. Recommend we adjust shield harmonics to the upper EM band when proceeding. These appear to be some kind of power-wave-guide conduits which allow them to work collectively as they perform ship functions. Increase deflector modulation to upper frequency band.</p>\\n                        <p>I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.</p>\\n                        <p>Sensors indicate no shuttle or other ships in this sector. According to coordinates, we have travelled 7,000 light years and are located near the system J-25. Tractor beam released, sir. Force field maintaining our hull integrity. Damage report? Sections 27, 28 and 29 on decks four, five and six destroyed. Without our shields, at this range it is probable a photon detonation could destroy the Enterprise.</p>"},{"type":"section","title":"button styles"},{"type":"button","text":"Primary","style":"primary","url":"https://www.github.com"},{"type":"button","text":"Secondary)","url":"https://www.github.com"},{"type":"button","text":"Press Me","url":"https://www.github.com"},{"type":"section","title":"block buttons"},{"type":"button","text":"Action Email","action":"notifications.off","subject":"Hit Send to Turn off Confirmation Emails","body":"name: %0A amount: %0A tag [network, colo, hosting]: %0A probability[1-10]: %0A%0A%0A--%0AThis is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox.","style":"block primary"},{"type":"button","text":"Action Email: Turn off confirmations","action":"notifications.off","style":"block","subject":"Hit Send to Turn off Confirmation Emails","body":"This is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox."},{"type":"html","text":"<table width=\\"100%\\" border=\\"0\\"><tr><td></td></tr></table>"}]}]}',
          http_response_statuscode: 200
        },
        {
          id: 13654,
          date: "2018-01-22 07:03:09",
          type: "webhook",
          extension: "gopher-express-ngrok",
          extension_ownerid: 2,
          taskId: 1071,
          userId: 2,
          event: "webhook success: task.updated",
          data: [],
          http_request_url: "http://gopher-express-ngrok.ngrok.io/webhooks",
          http_request_method: "POST",
          http_request_headers: {
            Host: ["gopher-express-ngrok.ngrok.io"],
            "X-Gopher-Timestamp": [1516604589],
            "X-Gopher-Signature": [
              "07766ce38b2b5f27f8937fc8882af4a94a420559b72cbede22fc2aef395d8e23"
            ],
            "User-Agent": ["Gopher (http://www.gopher.email)"],
            "Content-Type": ["application/json"],
            "Content-Length": [870]
          },
          http_request_body:
            '{"event":"task.updated","version":1,"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","developer_name":"","help_url":"","stored_data":{"gopher_token":"c1cd0d3cd124e289aa6ff0accf30e8362d259263"}},"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Joe Schmoe","timezone":"America\\/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"MMMM Do YYYY, h:mm a"},"task":{"created":1515474322,"completed":false,"completed_on":"","id":1071,"reminder_time":"0000-00-00 00:00:00","reminder_timeformat":"","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"stored_data":{"contact_id":"12345"}}}',
          http_response_headers: {
            "X-Powered-By": ["Express"],
            "Content-Type": ["application/json; charset=utf-8"],
            "Content-Length": ["2941"],
            ETag: ['W/"b7d-0fJzk5IcjotfMJQm0u88w0ZEecU"'],
            Date: ["Mon, 22 Jan 2018 07:03:05 GMT"]
          },
          http_response_body:
            '{"version":1,"task":{"reference_email":{"to":[],"cc":[],"bcc":[],"from":"","subject":"","html":""},"stored_data":{"contact_id":"12345"}},"response":[{"type":"email","to":"esweetland@gmail.com","cc":"","bcc":"","from":"Sender Name","subject":"A Custom Email Subject From Gopher","reply_to":{"action":"arbitrary.data.string"},"body":[{"type":"soft-error","text":"Give the user an error here"},{"type":"title","ext":"A Great Title"},{"type":"section","title":"DESCRIPTION"},{"type":"html","text":"Include images, HTML or other items here. \\n                        <p> Deflector power at maximum. Energy discharge in six seconds. Warp reactor core primary coolant failure. Fluctuate phaser resonance frequencies. Resistance is futile. Recommend we adjust shield harmonics to the upper EM band when proceeding. These appear to be some kind of power-wave-guide conduits which allow them to work collectively as they perform ship functions. Increase deflector modulation to upper frequency band.</p>\\n                        <p>I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.</p>\\n                        <p>Sensors indicate no shuttle or other ships in this sector. According to coordinates, we have travelled 7,000 light years and are located near the system J-25. Tractor beam released, sir. Force field maintaining our hull integrity. Damage report? Sections 27, 28 and 29 on decks four, five and six destroyed. Without our shields, at this range it is probable a photon detonation could destroy the Enterprise.</p>"},{"type":"section","title":"button styles"},{"type":"button","text":"Primary","style":"primary","url":"https://www.github.com"},{"type":"button","text":"Secondary)","url":"https://www.github.com"},{"type":"button","text":"Press Me","url":"https://www.github.com"},{"type":"section","title":"block buttons"},{"type":"button","text":"Action Email","action":"notifications.off","subject":"Hit Send to Turn off Confirmation Emails","body":"name: %0A amount: %0A tag [network, colo, hosting]: %0A probability[1-10]: %0A%0A%0A--%0AThis is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox.","style":"block primary"},{"type":"button","text":"Action Email: Turn off confirmations","action":"notifications.off","style":"block","subject":"Hit Send to Turn off Confirmation Emails","body":"This is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox."},{"type":"html","text":"<table width=\\"100%\\" border=\\"0\\"><tr><td></td></tr></table>"}]}]}',
          http_response_statuscode: 200
        },
        {
          id: 13652,
          date: "2018-01-22 07:03:08",
          type: "webhook",
          extension: "gopher-express-ngrok",
          extension_ownerid: 2,
          taskId: 1071,
          userId: 2,
          event: "webhook success: task.viewed",
          data: [],
          http_request_url: "http://gopher-express-ngrok.ngrok.io/webhooks",
          http_request_method: "POST",
          http_request_headers: {
            Host: ["gopher-express-ngrok.ngrok.io"],
            "X-Gopher-Timestamp": [1516604587],
            "X-Gopher-Signature": [
              "761b3a9a20b5f1a01a862ddac62b418befe438a9169c922848081d758e6cf7d6"
            ],
            "User-Agent": ["Gopher (http://www.gopher.email)"],
            "Content-Type": ["application/json"],
            "Content-Length": [869]
          },
          http_request_body:
            '{"event":"task.viewed","version":1,"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","developer_name":"","help_url":"","stored_data":{"gopher_token":"c1cd0d3cd124e289aa6ff0accf30e8362d259263"}},"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Joe Schmoe","timezone":"America\\/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"MMMM Do YYYY, h:mm a"},"task":{"created":1515474322,"completed":false,"completed_on":"","id":1071,"reminder_time":"0000-00-00 00:00:00","reminder_timeformat":"","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"stored_data":{"contact_id":"12345"}}}',
          http_response_headers: {
            "X-Powered-By": ["Express"],
            "Content-Type": ["application/json; charset=utf-8"],
            "Content-Length": ["2941"],
            ETag: ['W/"b7d-0fJzk5IcjotfMJQm0u88w0ZEecU"'],
            Date: ["Mon, 22 Jan 2018 07:03:03 GMT"]
          },
          http_response_body:
            '{"version":1,"task":{"reference_email":{"to":[],"cc":[],"bcc":[],"from":"","subject":"","html":""},"stored_data":{"contact_id":"12345"}},"response":[{"type":"email","to":"esweetland@gmail.com","cc":"","bcc":"","from":"Sender Name","subject":"A Custom Email Subject From Gopher","reply_to":{"action":"arbitrary.data.string"},"body":[{"type":"soft-error","text":"Give the user an error here"},{"type":"title","ext":"A Great Title"},{"type":"section","title":"DESCRIPTION"},{"type":"html","text":"Include images, HTML or other items here. \\n                        <p> Deflector power at maximum. Energy discharge in six seconds. Warp reactor core primary coolant failure. Fluctuate phaser resonance frequencies. Resistance is futile. Recommend we adjust shield harmonics to the upper EM band when proceeding. These appear to be some kind of power-wave-guide conduits which allow them to work collectively as they perform ship functions. Increase deflector modulation to upper frequency band.</p>\\n                        <p>I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.</p>\\n                        <p>Sensors indicate no shuttle or other ships in this sector. According to coordinates, we have travelled 7,000 light years and are located near the system J-25. Tractor beam released, sir. Force field maintaining our hull integrity. Damage report? Sections 27, 28 and 29 on decks four, five and six destroyed. Without our shields, at this range it is probable a photon detonation could destroy the Enterprise.</p>"},{"type":"section","title":"button styles"},{"type":"button","text":"Primary","style":"primary","url":"https://www.github.com"},{"type":"button","text":"Secondary)","url":"https://www.github.com"},{"type":"button","text":"Press Me","url":"https://www.github.com"},{"type":"section","title":"block buttons"},{"type":"button","text":"Action Email","action":"notifications.off","subject":"Hit Send to Turn off Confirmation Emails","body":"name: %0A amount: %0A tag [network, colo, hosting]: %0A probability[1-10]: %0A%0A%0A--%0AThis is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox.","style":"block primary"},{"type":"button","text":"Action Email: Turn off confirmations","action":"notifications.off","style":"block","subject":"Hit Send to Turn off Confirmation Emails","body":"This is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox."},{"type":"html","text":"<table width=\\"100%\\" border=\\"0\\"><tr><td></td></tr></table>"}]}]}',
          http_response_statuscode: 200
        },
        {
          id: 13647,
          date: "2018-01-22 07:02:56",
          type: "webhook",
          extension: "gopher-express-ngrok",
          extension_ownerid: 2,
          taskId: 1643,
          userId: 2,
          event: "webhook success: task.created",
          data: [],
          http_request_url: "http://gopher-express-ngrok.ngrok.io/webhooks",
          http_request_method: "POST",
          http_request_headers: {
            Host: ["gopher-express-ngrok.ngrok.io"],
            "X-Gopher-Timestamp": [1516604575],
            "X-Gopher-Signature": [
              "b1c2463101fbcbe46d635980b2998c136f3f4106eb882f47692a4f48d66c5b79"
            ],
            "User-Agent": ["Gopher (http://www.gopher.email)"],
            "Content-Type": ["application/json"],
            "Content-Length": [1639]
          },
          http_request_body:
            '{"command":{"format":"test-c@gopher-express-ngrok.gopher.email","flag":"gopher-express-ngrok","params":["test-c"],"source":{"type":"email","recipient":"test-c@gopher-express-ngrok.gopher.email","from":"esweetland@gmail.com","method":"bcc","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"subject":"Test1","html":"Test1","text":"Test1","headers":{"authorization":"Bearer 1457f06e32a8123843c2041cff205e3408b89b25","accept":"application\\/json, text\\/plain, *\\/*","content-type":"application\\/json","user-agent":"axios\\/0.17.1","content-length":"364","host":"local.gopher.email","connection":"close","x-php-ob-level":"1","to":"test@gopher-express-ngrok.gopher.email","cc":"","bcc":"","subject":"Test1","from":"esweetland@gmail.com"}}},"event":"task.created","version":1,"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","developer_name":"","help_url":"","stored_data":{"gopher_token":"c1cd0d3cd124e289aa6ff0accf30e8362d259263"}},"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Joe Schmoe","timezone":"America\\/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"MMMM Do YYYY, h:mm a"},"task":{"created":1516604574,"completed":false,"completed_on":"","id":1643,"reminder_time":"2018-01-22 07:02:55","reminder_timeformat":"1sec","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}}',
          http_response_headers: {
            "X-Powered-By": ["Express"],
            "Content-Type": ["application/json; charset=utf-8"],
            "Content-Length": ["2941"],
            ETag: ['W/"b7d-0fJzk5IcjotfMJQm0u88w0ZEecU"'],
            Date: ["Mon, 22 Jan 2018 07:02:52 GMT"]
          },
          http_response_body:
            '{"version":1,"task":{"reference_email":{"to":[],"cc":[],"bcc":[],"from":"","subject":"","html":""},"stored_data":{"contact_id":"12345"}},"response":[{"type":"email","to":"esweetland@gmail.com","cc":"","bcc":"","from":"Sender Name","subject":"A Custom Email Subject From Gopher","reply_to":{"action":"arbitrary.data.string"},"body":[{"type":"soft-error","text":"Give the user an error here"},{"type":"title","ext":"A Great Title"},{"type":"section","title":"DESCRIPTION"},{"type":"html","text":"Include images, HTML or other items here. \\n                        <p> Deflector power at maximum. Energy discharge in six seconds. Warp reactor core primary coolant failure. Fluctuate phaser resonance frequencies. Resistance is futile. Recommend we adjust shield harmonics to the upper EM band when proceeding. These appear to be some kind of power-wave-guide conduits which allow them to work collectively as they perform ship functions. Increase deflector modulation to upper frequency band.</p>\\n                        <p>I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.</p>\\n                        <p>Sensors indicate no shuttle or other ships in this sector. According to coordinates, we have travelled 7,000 light years and are located near the system J-25. Tractor beam released, sir. Force field maintaining our hull integrity. Damage report? Sections 27, 28 and 29 on decks four, five and six destroyed. Without our shields, at this range it is probable a photon detonation could destroy the Enterprise.</p>"},{"type":"section","title":"button styles"},{"type":"button","text":"Primary","style":"primary","url":"https://www.github.com"},{"type":"button","text":"Secondary)","url":"https://www.github.com"},{"type":"button","text":"Press Me","url":"https://www.github.com"},{"type":"section","title":"block buttons"},{"type":"button","text":"Action Email","action":"notifications.off","subject":"Hit Send to Turn off Confirmation Emails","body":"name: %0A amount: %0A tag [network, colo, hosting]: %0A probability[1-10]: %0A%0A%0A--%0AThis is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox.","style":"block primary"},{"type":"button","text":"Action Email: Turn off confirmations","action":"notifications.off","style":"block","subject":"Hit Send to Turn off Confirmation Emails","body":"This is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox."},{"type":"html","text":"<table width=\\"100%\\" border=\\"0\\"><tr><td></td></tr></table>"}]}]}',
          http_response_statuscode: 200
        },
        {
          id: 13638,
          date: "2018-01-22 07:02:02",
          type: "webhook",
          extension: "gopher-express-ngrok",
          extension_ownerid: 2,
          taskId: 1642,
          userId: 2,
          event: "webhook success: task.created",
          data: [],
          http_request_url: "http://gopher-express-ngrok.ngrok.io/webhooks",
          http_request_method: "POST",
          http_request_headers: {
            Host: ["gopher-express-ngrok.ngrok.io"],
            "X-Gopher-Timestamp": [1516604521],
            "X-Gopher-Signature": [
              "327623afa099c9a90c6be698e5f9c619965d1739dd7270da28f4dd13a7a497d6"
            ],
            "User-Agent": ["Gopher (http://www.gopher.email)"],
            "Content-Type": ["application/json"],
            "Content-Length": [1639]
          },
          http_request_body:
            '{"command":{"format":"test-c@gopher-express-ngrok.gopher.email","flag":"gopher-express-ngrok","params":["test-c"],"source":{"type":"email","recipient":"test-c@gopher-express-ngrok.gopher.email","from":"esweetland@gmail.com","method":"bcc","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"subject":"Test1","html":"Test1","text":"Test1","headers":{"authorization":"Bearer 1457f06e32a8123843c2041cff205e3408b89b25","accept":"application\\/json, text\\/plain, *\\/*","content-type":"application\\/json","user-agent":"axios\\/0.17.1","content-length":"364","host":"local.gopher.email","connection":"close","x-php-ob-level":"1","to":"test@gopher-express-ngrok.gopher.email","cc":"","bcc":"","subject":"Test1","from":"esweetland@gmail.com"}}},"event":"task.created","version":1,"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","developer_name":"","help_url":"","stored_data":{"gopher_token":"c1cd0d3cd124e289aa6ff0accf30e8362d259263"}},"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Joe Schmoe","timezone":"America\\/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"MMMM Do YYYY, h:mm a"},"task":{"created":1516604520,"completed":false,"completed_on":"","id":1642,"reminder_time":"2018-01-22 07:02:01","reminder_timeformat":"1sec","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}}',
          http_response_headers: {
            "X-Powered-By": ["Express"],
            "Content-Type": ["application/json; charset=utf-8"],
            "Content-Length": ["2941"],
            ETag: ['W/"b7d-0fJzk5IcjotfMJQm0u88w0ZEecU"'],
            Date: ["Mon, 22 Jan 2018 07:01:58 GMT"]
          },
          http_response_body:
            '{"version":1,"task":{"reference_email":{"to":[],"cc":[],"bcc":[],"from":"","subject":"","html":""},"stored_data":{"contact_id":"12345"}},"response":[{"type":"email","to":"esweetland@gmail.com","cc":"","bcc":"","from":"Sender Name","subject":"A Custom Email Subject From Gopher","reply_to":{"action":"arbitrary.data.string"},"body":[{"type":"soft-error","text":"Give the user an error here"},{"type":"title","ext":"A Great Title"},{"type":"section","title":"DESCRIPTION"},{"type":"html","text":"Include images, HTML or other items here. \\n                        <p> Deflector power at maximum. Energy discharge in six seconds. Warp reactor core primary coolant failure. Fluctuate phaser resonance frequencies. Resistance is futile. Recommend we adjust shield harmonics to the upper EM band when proceeding. These appear to be some kind of power-wave-guide conduits which allow them to work collectively as they perform ship functions. Increase deflector modulation to upper frequency band.</p>\\n                        <p>I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.</p>\\n                        <p>Sensors indicate no shuttle or other ships in this sector. According to coordinates, we have travelled 7,000 light years and are located near the system J-25. Tractor beam released, sir. Force field maintaining our hull integrity. Damage report? Sections 27, 28 and 29 on decks four, five and six destroyed. Without our shields, at this range it is probable a photon detonation could destroy the Enterprise.</p>"},{"type":"section","title":"button styles"},{"type":"button","text":"Primary","style":"primary","url":"https://www.github.com"},{"type":"button","text":"Secondary)","url":"https://www.github.com"},{"type":"button","text":"Press Me","url":"https://www.github.com"},{"type":"section","title":"block buttons"},{"type":"button","text":"Action Email","action":"notifications.off","subject":"Hit Send to Turn off Confirmation Emails","body":"name: %0A amount: %0A tag [network, colo, hosting]: %0A probability[1-10]: %0A%0A%0A--%0AThis is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox.","style":"block primary"},{"type":"button","text":"Action Email: Turn off confirmations","action":"notifications.off","style":"block","subject":"Hit Send to Turn off Confirmation Emails","body":"This is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox."},{"type":"html","text":"<table width=\\"100%\\" border=\\"0\\"><tr><td></td></tr></table>"}]}]}',
          http_response_statuscode: 200
        },
        {
          id: 13620,
          date: "2018-01-22 06:55:47",
          type: "webhook",
          extension: "gopher-express-ngrok",
          extension_ownerid: 2,
          taskId: 1641,
          userId: 2,
          event: "webhook success: task.created",
          data: [],
          http_request_url: "http://gopher-express-ngrok.ngrok.io/webhooks",
          http_request_method: "POST",
          http_request_headers: {
            Host: ["gopher-express-ngrok.ngrok.io"],
            "X-Gopher-Timestamp": [1516604146],
            "X-Gopher-Signature": [
              "659442811271457eb23a3b44b2bfb91ec66cddaacc9870a18611186286722796"
            ],
            "User-Agent": ["Gopher (http://www.gopher.email)"],
            "Content-Type": ["application/json"],
            "Content-Length": [1639]
          },
          http_request_body:
            '{"command":{"format":"test-c@gopher-express-ngrok.gopher.email","flag":"gopher-express-ngrok","params":["test-c"],"source":{"type":"email","recipient":"test-c@gopher-express-ngrok.gopher.email","from":"esweetland@gmail.com","method":"bcc","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"subject":"Test1","html":"Test1","text":"Test1","headers":{"authorization":"Bearer 1457f06e32a8123843c2041cff205e3408b89b25","accept":"application\\/json, text\\/plain, *\\/*","content-type":"application\\/json","user-agent":"axios\\/0.17.1","content-length":"364","host":"local.gopher.email","connection":"close","x-php-ob-level":"1","to":"test@gopher-express-ngrok.gopher.email","cc":"","bcc":"","subject":"Test1","from":"esweetland@gmail.com"}}},"event":"task.created","version":1,"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","developer_name":"","help_url":"","stored_data":{"gopher_token":"c1cd0d3cd124e289aa6ff0accf30e8362d259263"}},"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Joe Schmoe","timezone":"America\\/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"MMMM Do YYYY, h:mm a"},"task":{"created":1516604145,"completed":false,"completed_on":"","id":1641,"reminder_time":"2018-01-22 06:55:46","reminder_timeformat":"1sec","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}}',
          http_response_headers: {
            "X-Powered-By": ["Express"],
            "Content-Type": ["application/json; charset=utf-8"],
            "Content-Length": ["2941"],
            ETag: ['W/"b7d-0fJzk5IcjotfMJQm0u88w0ZEecU"'],
            Date: ["Mon, 22 Jan 2018 06:55:43 GMT"]
          },
          http_response_body:
            '{"version":1,"task":{"reference_email":{"to":[],"cc":[],"bcc":[],"from":"","subject":"","html":""},"stored_data":{"contact_id":"12345"}},"response":[{"type":"email","to":"esweetland@gmail.com","cc":"","bcc":"","from":"Sender Name","subject":"A Custom Email Subject From Gopher","reply_to":{"action":"arbitrary.data.string"},"body":[{"type":"soft-error","text":"Give the user an error here"},{"type":"title","ext":"A Great Title"},{"type":"section","title":"DESCRIPTION"},{"type":"html","text":"Include images, HTML or other items here. \\n                        <p> Deflector power at maximum. Energy discharge in six seconds. Warp reactor core primary coolant failure. Fluctuate phaser resonance frequencies. Resistance is futile. Recommend we adjust shield harmonics to the upper EM band when proceeding. These appear to be some kind of power-wave-guide conduits which allow them to work collectively as they perform ship functions. Increase deflector modulation to upper frequency band.</p>\\n                        <p>I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.</p>\\n                        <p>Sensors indicate no shuttle or other ships in this sector. According to coordinates, we have travelled 7,000 light years and are located near the system J-25. Tractor beam released, sir. Force field maintaining our hull integrity. Damage report? Sections 27, 28 and 29 on decks four, five and six destroyed. Without our shields, at this range it is probable a photon detonation could destroy the Enterprise.</p>"},{"type":"section","title":"button styles"},{"type":"button","text":"Primary","style":"primary","url":"https://www.github.com"},{"type":"button","text":"Secondary)","url":"https://www.github.com"},{"type":"button","text":"Press Me","url":"https://www.github.com"},{"type":"section","title":"block buttons"},{"type":"button","text":"Action Email","action":"notifications.off","subject":"Hit Send to Turn off Confirmation Emails","body":"name: %0A amount: %0A tag [network, colo, hosting]: %0A probability[1-10]: %0A%0A%0A--%0AThis is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox.","style":"block primary"},{"type":"button","text":"Action Email: Turn off confirmations","action":"notifications.off","style":"block","subject":"Hit Send to Turn off Confirmation Emails","body":"This is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox."},{"type":"html","text":"<table width=\\"100%\\" border=\\"0\\"><tr><td></td></tr></table>"}]}]}',
          http_response_statuscode: 200
        },
        {
          id: 13609,
          date: "2018-01-21 23:46:34",
          type: "webhook",
          extension: "gopher-express-ngrok",
          extension_ownerid: 2,
          taskId: 1071,
          userId: 2,
          event: "webhook success: task.updated",
          data: [],
          http_request_url: "http://gopher-express-ngrok.ngrok.io/webhooks",
          http_request_method: "POST",
          http_request_headers: {
            Host: ["gopher-express-ngrok.ngrok.io"],
            "X-Gopher-Timestamp": [1516578393],
            "X-Gopher-Signature": [
              "9c3d610febee568fc14fb8b29c7fcbe064278d92810df9eee7ae61cc1f531618"
            ],
            "Content-Type": ["application/json"],
            "Content-Length": [870],
            "User-Agent": ["Guzzle/3.9.3 curl/7.38.0 PHP/5.6.28"]
          },
          http_request_body:
            '{"event":"task.updated","version":1,"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","developer_name":"","help_url":"","stored_data":{"gopher_token":"c1cd0d3cd124e289aa6ff0accf30e8362d259263"}},"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Joe Schmoe","timezone":"America\\/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"MMMM Do YYYY, h:mm a"},"task":{"created":1515474322,"completed":false,"completed_on":"","id":1071,"reminder_time":"0000-00-00 00:00:00","reminder_timeformat":"","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"stored_data":{"contact_id":"12345"}}}',
          http_response_headers: {
            "X-Powered-By": ["Express"],
            "Content-Type": ["application/json; charset=utf-8"],
            "Content-Length": ["2941"],
            ETag: ['W/"b7d-0fJzk5IcjotfMJQm0u88w0ZEecU"'],
            Date: ["Sun, 21 Jan 2018 23:46:18 GMT"]
          },
          http_response_body:
            '{"version":1,"task":{"reference_email":{"to":[],"cc":[],"bcc":[],"from":"","subject":"","html":""},"stored_data":{"contact_id":"12345"}},"response":[{"type":"email","to":"esweetland@gmail.com","cc":"","bcc":"","from":"Sender Name","subject":"A Custom Email Subject From Gopher","reply_to":{"action":"arbitrary.data.string"},"body":[{"type":"soft-error","text":"Give the user an error here"},{"type":"title","ext":"A Great Title"},{"type":"section","title":"DESCRIPTION"},{"type":"html","text":"Include images, HTML or other items here. \\n                        <p> Deflector power at maximum. Energy discharge in six seconds. Warp reactor core primary coolant failure. Fluctuate phaser resonance frequencies. Resistance is futile. Recommend we adjust shield harmonics to the upper EM band when proceeding. These appear to be some kind of power-wave-guide conduits which allow them to work collectively as they perform ship functions. Increase deflector modulation to upper frequency band.</p>\\n                        <p>I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.</p>\\n                        <p>Sensors indicate no shuttle or other ships in this sector. According to coordinates, we have travelled 7,000 light years and are located near the system J-25. Tractor beam released, sir. Force field maintaining our hull integrity. Damage report? Sections 27, 28 and 29 on decks four, five and six destroyed. Without our shields, at this range it is probable a photon detonation could destroy the Enterprise.</p>"},{"type":"section","title":"button styles"},{"type":"button","text":"Primary","style":"primary","url":"https://www.github.com"},{"type":"button","text":"Secondary)","url":"https://www.github.com"},{"type":"button","text":"Press Me","url":"https://www.github.com"},{"type":"section","title":"block buttons"},{"type":"button","text":"Action Email","action":"notifications.off","subject":"Hit Send to Turn off Confirmation Emails","body":"name: %0A amount: %0A tag [network, colo, hosting]: %0A probability[1-10]: %0A%0A%0A--%0AThis is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox.","style":"block primary"},{"type":"button","text":"Action Email: Turn off confirmations","action":"notifications.off","style":"block","subject":"Hit Send to Turn off Confirmation Emails","body":"This is a Gopher email-action, a handy way of getting stuff done without ever leaving your inbox."},{"type":"html","text":"<table width=\\"100%\\" border=\\"0\\"><tr><td></td></tr></table>"}]}]}',
          http_response_statuscode: 200
        }
      ]
    },
    [
      "Date",
      "Mon, 22 Jan 2018 07:38:03 GMT",
      "Server",
      "Apache/2.4.10 (Debian)",
      "Access-Control-Allow-Origin",
      "*",
      "Access-Control-Allow-Headers",
      "authorization, Content-Type, cache-control, postman-token",
      "Cache-Control",
      "no-cache",
      "Access-Control-Allow-Methods",
      "GET, POST, PUT ,DELETE, OPTIONS",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
      "Content-Type",
      "application/json"
    ]
  );

nock("http://local.gopher.email:80", { encodedQueryParams: true })
  .get("/api/v1/extensions/self/data/")
  .reply(
    200,
    {
      status: "success",
      data: {
        three: "more",
        evernote_access_token: "abc",
        more_new_data: "def",
        foo: "bar"
      },
      user: {
        name: "Joe Schmoe",
        email: "esweetland@gmail.com",
        timezone: "America/Los_Angeles"
      }
    },
    [
      "Date",
      "Mon, 22 Jan 2018 07:38:03 GMT",
      "Server",
      "Apache/2.4.10 (Debian)",
      "Cache-Control",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "Access-Control-Allow-Headers",
      "authorization, Content-Type, cache-control, postman-token",
      "Access-Control-Allow-Methods",
      "GET, POST, PUT ,DELETE, OPTIONS",
      "Content-Length",
      "202",
      "Connection",
      "close",
      "Content-Type",
      "application/json"
    ]
  );

nock("http://local.gopher.email:80", { encodedQueryParams: true })
  .post("/api/v1/extensions/self/data/", { foo: "bar" })
  .reply(
    200,
    {
      status: "success",
      data: {
        three: "more",
        evernote_access_token: "abc",
        more_new_data: "def",
        foo: "bar"
      },
      user: {
        name: "Joe Schmoe",
        email: "esweetland@gmail.com",
        timezone: "America/Los_Angeles"
      }
    },
    [
      "Date",
      "Mon, 22 Jan 2018 07:38:04 GMT",
      "Server",
      "Apache/2.4.10 (Debian)",
      "Cache-Control",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "Access-Control-Allow-Headers",
      "authorization, Content-Type, cache-control, postman-token",
      "Access-Control-Allow-Methods",
      "GET, POST, PUT ,DELETE, OPTIONS",
      "Content-Length",
      "202",
      "Connection",
      "close",
      "Content-Type",
      "application/json"
    ]
  );
