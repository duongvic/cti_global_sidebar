let phoneNumberReceiver = "";
let listContacts = [];
let listContactsExample = [
  {
    active: false,
    address: null,
    description: null,
    email: "anntp.work30@outlook.com",
    id: 153004219353,
    job_title: null,
    language: "en",
    mobile: "0916009329",
    name: "An Adora",
    phone: "0917114338",
    time_zone: "Eastern Time (US & Canada)",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-11-15T10:08:04Z",
    updated_at: "2023-12-01T03:24:04Z",
    csat_rating: null,
    preferred_source: null,
    company_id: null,
    unique_external_id: null,
    first_name: "An",
    last_name: "Adora",
    visitor_id: "f56159fa-1d68-4ba3-803c-b4dcfb144782",
    org_contact_id: 1724730982397542400,
    other_phone_numbers: [],
  },
  {
    active: false,
    address: null,
    description: null,
    email: "vunt@fpt.com",
    id: 153004263687,
    job_title: null,
    language: "en",
    mobile: "0919976468",
    name: "Anh VuNT2",
    phone: "0919976468",
    time_zone: "Eastern Time (US & Canada)",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-11-17T09:22:25Z",
    updated_at: "2023-11-17T09:52:53Z",
    csat_rating: null,
    preferred_source: null,
    company_id: null,
    unique_external_id: null,
    first_name: "Anh",
    last_name: "VuNT2",
    visitor_id: "d807cdfd-9740-4cc6-ab9a-334291706df2",
    org_contact_id: 1725444269225898000,
    other_phone_numbers: [],
  },
  {
    active: false,
    address: null,
    description: null,
    email: "tuandm@fpt.com",
    id: 153004219232,
    job_title: null,
    language: "en",
    mobile: "0989248962",
    name: "Anh TuanDM30",
    phone: "0989248962",
    time_zone: "Eastern Time (US & Canada)",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-11-15T09:54:50Z",
    updated_at: "2023-11-17T05:07:37Z",
    csat_rating: null,
    preferred_source: "phone",
    company_id: null,
    unique_external_id: null,
    first_name: "Anh",
    last_name: "TuanDM30",
    visitor_id: "e6a46f23-8719-49de-b722-5000e6d1a43e",
    org_contact_id: 1724727652233867300,
    other_phone_numbers: [],
  },
  {
    active: true,
    address: "7, Stone Hill, W 240 St, NY",
    description: null,
    email: "bob.tree@freshdesk.com",
    id: 153000350490,
    job_title: null,
    language: "en",
    mobile: null,
    name: "Bob Tree",
    phone: "8295701297",
    time_zone: "Casablanca",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-08-31T11:59:54Z",
    updated_at: "2023-09-05T07:00:37Z",
    csat_rating: null,
    preferred_source: null,
    company_id: null,
    unique_external_id: null,
    first_name: "Bob",
    last_name: "Tree",
    visitor_id: "166d20dd-c185-4edc-9c86-c5a28fc498d5",
    org_contact_id: 1698950533940256800,
    other_phone_numbers: [],
  },
  {
    active: false,
    address: null,
    description: null,
    email: "dieunt21@fpt.com",
    id: 153001660798,
    job_title: "BA",
    language: "en",
    mobile: "0397762083",
    name: "Chị DieuNT21",
    phone: "0397762083",
    time_zone: "Eastern Time (US & Canada)",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-09-27T09:31:42Z",
    updated_at: "2023-09-29T03:06:37Z",
    csat_rating: null,
    preferred_source: "chat",
    company_id: 153000073945,
    other_companies: [],
    unique_external_id: null,
    first_name: "Chị",
    last_name: "DieuNT21",
    visitor_id: "7f62358a-0983-47a3-b46b-bcf292682f96",
    org_contact_id: 1706964823592075300,
    other_phone_numbers: [],
  },
  {
    active: false,
    address: null,
    description: null,
    email: "nganttt18@fpt.com",
    id: 153002172716,
    job_title: null,
    language: "en",
    mobile: null,
    name: "Chị Nấm Ngân",
    phone: null,
    time_zone: "Eastern Time (US & Canada)",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-10-04T01:48:48Z",
    updated_at: "2023-12-01T03:25:55Z",
    csat_rating: null,
    preferred_source: null,
    company_id: 153000085841,
    other_companies: [],
    unique_external_id: null,
    first_name: "Chị Nấm",
    last_name: "Ngân",
    visitor_id: "b1d9a311-2492-4f9e-b824-8a41505c5f75",
    org_contact_id: 1709385045827227600,
    other_phone_numbers: [],
  },
  {
    active: true,
    address: null,
    description: null,
    email: "clboone@freshdesk.com",
    id: 153000350496,
    job_title: null,
    language: "en",
    mobile: null,
    name: "Clarice Boone",
    phone: null,
    time_zone: "Casablanca",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-08-31T11:59:56Z",
    updated_at: "2023-09-05T07:00:41Z",
    csat_rating: null,
    preferred_source: null,
    company_id: null,
    unique_external_id: null,
    first_name: "Clarice",
    last_name: "Boone",
    visitor_id: "aed21d49-0264-4aef-bedf-8ab9b0df3ded",
    org_contact_id: 1698950540441817000,
    other_phone_numbers: [],
  },
  {
    active: false,
    address: null,
    description: null,
    email: "eleanor.pena@mail.com",
    id: 153000518954,
    job_title: null,
    language: "en",
    mobile: "+14803850268",
    name: "Eleanor Pena",
    phone: null,
    time_zone: "Eastern Time (US & Canada)",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-09-05T06:47:24Z",
    updated_at: "2023-09-05T06:47:24Z",
    csat_rating: null,
    preferred_source: null,
    company_id: null,
    unique_external_id: null,
    first_name: "Eleanor",
    last_name: "Pena",
    visitor_id: "d53f0897-6983-4d75-a0f0-1c08a90dd47b",
    org_contact_id: 1698950943450755000,
    other_phone_numbers: [],
  },
  {
    active: true,
    address: "86-90 Paul Street, London, EC2A 4NE",
    description: null,
    email: "emily.garcia@freshdesk.com",
    id: 153000350483,
    job_title: null,
    language: "en",
    mobile: null,
    name: "Emily Garcia",
    phone: "+448081698824",
    time_zone: "Casablanca",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-08-31T11:59:42Z",
    updated_at: "2023-10-31T10:03:44Z",
    csat_rating: null,
    preferred_source: "phone",
    company_id: null,
    unique_external_id: null,
    first_name: "Emily",
    last_name: "Garcia",
    visitor_id: "bdc3af7b-42f8-462f-8f78-5c59ec95bb41",
    org_contact_id: 1698950527287337000,
    other_phone_numbers: [],
  },
  {
    active: false,
    address: null,
    description: null,
    email: "emma.thompson@mail.com",
    id: 153000518957,
    job_title: null,
    language: "en",
    mobile: "+16505550140",
    name: "Emma Thompson",
    phone: null,
    time_zone: "Eastern Time (US & Canada)",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-09-05T06:47:24Z",
    updated_at: "2023-09-05T06:47:24Z",
    csat_rating: null,
    preferred_source: null,
    company_id: null,
    unique_external_id: null,
    first_name: "Emma",
    last_name: "Thompson",
    visitor_id: "5537cfd1-fe93-4b68-bcf8-1a080f0adc2b",
    org_contact_id: 1698950944761041000,
    other_phone_numbers: [],
  },
  {
    active: true,
    address: null,
    description: null,
    email: "finchhoot1@freshdesk.com",
    id: 153000350497,
    job_title: null,
    language: "en",
    mobile: null,
    name: "Finch Hoot",
    phone: null,
    time_zone: "Casablanca",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-08-31T11:59:56Z",
    updated_at: "2023-09-05T07:00:38Z",
    csat_rating: null,
    preferred_source: null,
    company_id: null,
    unique_external_id: null,
    first_name: "Finch",
    last_name: "Hoot",
    visitor_id: "18818b37-05ab-4130-9236-e440383ada4e",
    org_contact_id: 1698950541617045500,
    other_phone_numbers: [],
  },
  {
    active: true,
    address: null,
    description: null,
    email: "support@freshdesk.com",
    id: 153000350484,
    job_title: null,
    language: "en",
    mobile: null,
    name: "Freshdesk",
    phone: null,
    time_zone: "Casablanca",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-08-31T11:59:44Z",
    updated_at: "2023-09-05T07:00:36Z",
    csat_rating: null,
    preferred_source: null,
    company_id: null,
    unique_external_id: null,
    first_name: "Freshdesk",
    last_name: "",
    visitor_id: "b23a1f18-124c-47ca-89da-085ac65b77a6",
    org_contact_id: 1698950528806330400,
    other_phone_numbers: [],
  },
  {
    active: true,
    address: null,
    description: null,
    email: "ngoxuanhai041@gmail.com",
    id: 153002374064,
    job_title: null,
    language: "en",
    mobile: null,
    name: "Hải Ngô Xuân",
    phone: null,
    time_zone: "Eastern Time (US & Canada)",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-10-10T04:25:01Z",
    updated_at: "2023-10-10T04:55:13Z",
    csat_rating: null,
    preferred_source: null,
    company_id: null,
    unique_external_id: null,
    first_name: "Hải Ngô",
    last_name: "Xuân",
    visitor_id: "f7cfd79f-ea02-4f2d-bc03-366d665a9d0f",
    org_contact_id: 1711598684871299000,
    other_phone_numbers: [],
  },
  {
    active: false,
    address: "604-5854 Beckford St.",
    description: null,
    email: "janesampleton@gmail.com",
    id: 153000518952,
    job_title: "Sales Manager",
    language: "en",
    mobile: "19266529503",
    name: "Jane Sampleton (sample)",
    phone: "3684932360",
    time_zone: "Eastern Time (US & Canada)",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-09-05T06:47:24Z",
    updated_at: "2023-09-05T06:47:24Z",
    csat_rating: null,
    preferred_source: null,
    company_id: 153000038917,
    other_companies: [],
    unique_external_id: null,
    first_name: "Jane Sampleton",
    last_name: "(sample)",
    visitor_id: "e736c3a1-acad-4703-9264-12854f5ba0bc",
    org_contact_id: 1698950941990678500,
    other_phone_numbers: [],
  },
  {
    active: false,
    address: null,
    description: null,
    email: "jaypatelsample@gmail.com",
    id: 153000518950,
    job_title: null,
    language: "en",
    mobile: null,
    name: "Jay Patel (sample)",
    phone: null,
    time_zone: "Eastern Time (US & Canada)",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-09-05T06:47:23Z",
    updated_at: "2023-09-05T06:47:23Z",
    csat_rating: null,
    preferred_source: null,
    company_id: 153000038920,
    other_companies: [],
    unique_external_id: null,
    first_name: "Jay Patel",
    last_name: "(sample)",
    visitor_id: "e9cdff15-aa11-4f6d-8fbe-fa35e2744380",
    org_contact_id: 1698950940493312000,
    other_phone_numbers: [],
  },
  {
    active: true,
    address: null,
    description: null,
    email: "joe.mathew@freshdesk.com",
    id: 153000350488,
    job_title: null,
    language: "en",
    mobile: null,
    name: "Joe Mathew",
    phone: null,
    time_zone: "Casablanca",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-08-31T11:59:53Z",
    updated_at: "2023-09-05T07:00:39Z",
    csat_rating: null,
    preferred_source: null,
    company_id: null,
    unique_external_id: null,
    first_name: "Joe",
    last_name: "Mathew",
    visitor_id: "e15dc981-65a2-4708-a81c-2400451a023c",
    org_contact_id: 1698950532199407600,
    other_phone_numbers: [],
  },
  {
    active: true,
    address: "140, Sinclair St, Brooklyn Heights",
    description: null,
    email: "johnny.appleseed@freshdesk.com",
    id: 153000350492,
    job_title: null,
    language: "en",
    mobile: null,
    name: "Johnny Appleseed",
    phone: "123412834",
    time_zone: "Casablanca",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-08-31T11:59:54Z",
    updated_at: "2023-09-05T07:00:40Z",
    csat_rating: null,
    preferred_source: null,
    company_id: null,
    unique_external_id: null,
    first_name: "Johnny",
    last_name: "Appleseed",
    visitor_id: "7476f49d-eecf-44c0-849f-07cc814e6f18",
    org_contact_id: 1698950535639244800,
    other_phone_numbers: [],
  },
  {
    active: false,
    address: null,
    description: null,
    email: "kathryn.murphy@mail.com",
    id: 153000518948,
    job_title: null,
    language: "en",
    mobile: "+14903401275",
    name: "Kathryn Murphy",
    phone: null,
    time_zone: "Eastern Time (US & Canada)",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-09-05T06:47:23Z",
    updated_at: "2023-09-05T06:47:23Z",
    csat_rating: null,
    preferred_source: null,
    company_id: null,
    unique_external_id: null,
    first_name: "Kathryn",
    last_name: "Murphy",
    visitor_id: "054111c7-3e84-4ceb-a1a0-2db6e7f569ac",
    org_contact_id: 1698950939222020000,
    other_phone_numbers: [],
  },
  {
    active: false,
    address: null,
    description: null,
    email: "thamlt8@fpt.com",
    id: 153001446576,
    job_title: null,
    language: "en",
    mobile: "0339732801",
    name: "Khách hàng ThamLT8",
    phone: "0339732801",
    time_zone: "Hanoi",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-09-22T08:13:56Z",
    updated_at: "2023-10-17T08:10:40Z",
    csat_rating: null,
    preferred_source: "phone",
    company_id: null,
    unique_external_id: "erfghjm",
    first_name: "Khách hàng",
    last_name: "ThamLT8",
    visitor_id: "2cc8c673-e3e2-4c5c-80d8-cde1345bcdc2",
    org_contact_id: 1705133315332608000,
    other_phone_numbers: [],
  },
  {
    active: false,
    address: "3431 Eagle Rd",
    description: null,
    email: "lauranordasample@gmail.com",
    id: 153000518961,
    job_title: "Sales executive",
    language: "en",
    mobile: "19266343001",
    name: "Laura Norda (sample)",
    phone: "4167348672",
    time_zone: "Eastern Time (US & Canada)",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-09-05T06:47:25Z",
    updated_at: "2023-09-05T06:47:25Z",
    csat_rating: null,
    preferred_source: null,
    company_id: 153000038919,
    other_companies: [],
    unique_external_id: null,
    first_name: "Laura Norda",
    last_name: "(sample)",
    visitor_id: "8d74520f-9db3-40c5-bf5d-cf218e41c7dd",
    org_contact_id: 1698950947710337000,
    other_phone_numbers: [],
  },
  {
    active: true,
    address: null,
    description: null,
    email: "lewis.clarke@freshdesk.com",
    id: 153000350493,
    job_title: null,
    language: "en",
    mobile: null,
    name: "Lewis Clarke",
    phone: null,
    time_zone: "Casablanca",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-08-31T11:59:54Z",
    updated_at: "2023-09-05T07:00:39Z",
    csat_rating: null,
    preferred_source: null,
    company_id: null,
    unique_external_id: null,
    first_name: "Lewis",
    last_name: "Clarke",
    visitor_id: "7cb2639f-5d82-4bbc-ad2b-0b85383f74c7",
    org_contact_id: 1698950536522723300,
    other_phone_numbers: [],
  },
  {
    active: true,
    address: null,
    description: null,
    email: "soundofmusic@freshdesk.com",
    id: 153000350494,
    job_title: null,
    language: "en",
    mobile: null,
    name: "Maria Von Trapp",
    phone: null,
    time_zone: "Casablanca",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-08-31T11:59:55Z",
    updated_at: "2023-09-05T07:00:40Z",
    csat_rating: null,
    preferred_source: null,
    company_id: null,
    unique_external_id: null,
    first_name: "Maria Von",
    last_name: "Trapp",
    visitor_id: "c0b3a991-a4e3-4b66-b6fe-a02c16f0d8c7",
    org_contact_id: 1698950538465292300,
    other_phone_numbers: [],
  },
  {
    active: true,
    address: null,
    description: null,
    email: "mark.colbert@freshdesk.com",
    id: 153000350498,
    job_title: null,
    language: "en",
    mobile: null,
    name: "Mark Colbert",
    phone: null,
    time_zone: "Casablanca",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-08-31T11:59:56Z",
    updated_at: "2023-09-05T07:00:40Z",
    csat_rating: null,
    preferred_source: null,
    company_id: null,
    unique_external_id: null,
    first_name: "Mark",
    last_name: "Colbert",
    visitor_id: "852857cf-3f23-4398-ac1d-9e9cf5aff2e6",
    org_contact_id: 1698950542450401300,
    other_phone_numbers: [],
  },
  {
    active: true,
    address: "Level 28, 161 Castlereagh Street, Sydney NSW 2000",
    description: null,
    email: "matt.rogers@freshdesk.com",
    id: 153000350486,
    job_title: null,
    language: "en",
    mobile: null,
    name: "Matt Rogers",
    phone: "+611800861302",
    time_zone: "Casablanca",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-08-31T11:59:46Z",
    updated_at: "2023-09-05T07:00:36Z",
    csat_rating: null,
    preferred_source: "email",
    company_id: 153000027910,
    other_companies: [],
    unique_external_id: null,
    first_name: "Matt",
    last_name: "Rogers",
    visitor_id: "fdd59ab7-69a7-4f74-96fb-03c84cccb252",
    org_contact_id: 1698950529728143400,
    other_phone_numbers: [],
  },
  {
    active: true,
    address: null,
    description: null,
    email: "duongnh103.bds@gmail.com",
    id: 153004638900,
    job_title: null,
    language: "en",
    mobile: "0353293254",
    name: "Nguyễn Hoàng Dương",
    phone: "+84353293254",
    time_zone: "Eastern Time (US & Canada)",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-12-01T03:30:13Z",
    updated_at: "2023-12-01T03:40:14Z",
    csat_rating: null,
    preferred_source: null,
    company_id: null,
    unique_external_id: null,
    first_name: "Nguyễn Hoàng",
    last_name: "Dương",
    visitor_id: "60976ba1-3401-4fa9-aced-37ba301bc54a",
    org_contact_id: 1730429066071920600,
    other_phone_numbers: [],
  },
  {
    active: true,
    address: null,
    description: null,
    email: "aroundtheworld80@freshdesk.com",
    id: 153000350491,
    job_title: null,
    language: "en",
    mobile: null,
    name: "Phileas Fogg",
    phone: null,
    time_zone: "Casablanca",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-08-31T11:59:54Z",
    updated_at: "2023-09-05T07:00:39Z",
    csat_rating: null,
    preferred_source: null,
    company_id: null,
    unique_external_id: null,
    first_name: "Phileas",
    last_name: "Fogg",
    visitor_id: "6c454faf-ce2e-4983-bb1a-af126ada5b57",
    org_contact_id: 1698950534761586700,
    other_phone_numbers: [],
  },
  {
    active: true,
    address: null,
    description: null,
    email: "sam.kart@freshdesk.com",
    id: 153000350489,
    job_title: null,
    language: "en",
    mobile: null,
    name: "Sam Kart",
    phone: null,
    time_zone: "Casablanca",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-08-31T11:59:54Z",
    updated_at: "2023-09-05T07:00:37Z",
    csat_rating: null,
    preferred_source: null,
    company_id: null,
    unique_external_id: null,
    first_name: "Sam",
    last_name: "Kart",
    visitor_id: "fddfaf10-f138-4631-8ec2-06daff684461",
    org_contact_id: 1698950533099344000,
    other_phone_numbers: [],
  },
  {
    active: true,
    address: "2950 S. Delaware Street, Suite 201, San Mateo CA 94403",
    description: null,
    email: "sarah.james@freshdesk.com",
    id: 153000350487,
    job_title: null,
    language: "en",
    mobile: null,
    name: "Sarah James",
    phone: "+1855747676",
    time_zone: "Casablanca",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-08-31T11:59:51Z",
    updated_at: "2023-09-05T07:00:37Z",
    csat_rating: null,
    preferred_source: "email",
    company_id: null,
    unique_external_id: null,
    first_name: "Sarah",
    last_name: "James",
    visitor_id: "c69056d5-eeef-4297-8a28-c1b27fbe8550",
    org_contact_id: 1698950530912264200,
    other_phone_numbers: [],
  },
  {
    active: false,
    address: "2158 Mount Tabor",
    description: null,
    email: "spectorcalista@gmail.com",
    id: 153000518958,
    job_title: "Sales manager",
    language: "en",
    mobile: "19266520001",
    name: "Spector Calista (sample)",
    phone: "3684945781",
    time_zone: "Eastern Time (US & Canada)",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-09-05T06:47:25Z",
    updated_at: "2023-09-05T06:47:25Z",
    csat_rating: null,
    preferred_source: null,
    company_id: 153000038918,
    other_companies: [],
    unique_external_id: null,
    first_name: "Spector Calista",
    last_name: "(sample)",
    visitor_id: "30de6f0d-6094-49bf-a9ac-f898a8deb93c",
    org_contact_id: 1698950946233942000,
    other_phone_numbers: [],
  },
  {
    active: false,
    address: null,
    description: null,
    email: "unknown_contact@gmail.com",
    id: 153001820016,
    job_title: "Manager",
    language: "en",
    mobile: "0909204770",
    name: "Unknown Contact - 0909204770",
    phone: null,
    time_zone: "Eastern Time (US & Canada)",
    twitter_id: null,
    custom_fields: {},
    facebook_id: null,
    created_at: "2023-09-28T04:20:29Z",
    updated_at: "2023-11-04T10:09:12Z",
    csat_rating: null,
    preferred_source: "phone",
    company_id: null,
    unique_external_id: null,
    first_name: "Unknown Contact -",
    last_name: "0909204770",
    visitor_id: "d816c380-2d5b-437b-862d-d394e06474c3",
    org_contact_id: 1707248890269380600,
    other_phone_numbers: [
      {
        label: null,
        value: "02473003217",
      },
    ],
  },
];
let agent_ref = undefined;
let isMainActive = false;

/**as7 backend **/
let agent = anCti.newAgent();
let webphone;
let audio = new Audio();
audio.autoplay = true;

agent.startApplicationSession({
  username: "phuln6@fpt.com",
  password: "Phuln6!!!",
});
agent.on("applicationsessionstarted", () => {
  webphone = agent.getDevice("sip:1973@term.115");
  console.log({ webphone });
  // tell server that we want to use WebRTC (error handling omitted)
  webphone.monitorStart({ rtc: true });
});

// if WebRTC creates a media-stream we bind it to the corresponding elements
agent.on("localstream", (event) => {
  document.getElementById("localView").srcObject = event.stream;
});

agent.on("remotestream", (event) => {
  document.getElementById("remoteView").srcObject = event.stream;
  audio.srcObject = event.stream;
});
//   $("#toggle").on('click',() => {
//     $("#toggle").removeClass("hint");
//     $("#call").toggleClass("open");

// });

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  console.log(h);
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59

  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = m + ":" + s + " ";
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  document.getElementById("MyClockDisplayCollapseClickToCall").innerText = time;
  document.getElementById("MyClockDisplayCollapseClickToCall").textContent =
    time;
  setTimeout(showTime, 1000);
}
showTime();
/**as7 backend **/

// var client;

// init();

// async function init() {
//   client = await app.initialized();
//   client.events.on('app.activated', renderText);
// }

// async function renderText() {
//   const textElement = document.getElementById('apptext');
//   const contactData = await client.data.get('contact');
//   const {
//     contact: { name }
//   } = contactData;

//   textElement.innerHTML = `Ticket is created by ${name}`;
// }

/**
 * Show a notification toast with the given type and message
 *
 * @param {String} type - type of the notification
 * @param {String} message - content to be shown in the notification
 **/
function showNotify(type, message) {
  return client.interface.trigger("showNotify", {
    type: type,
    message: message,
  });
}

/**
 * To get the logged in user in Freshdesk
 */
function getLoggedInUser() {
  client.data.get("loggedInUser").then(
    function (data) {
      console.info("Successfully got loggedInUser data");
      showNotify("info", `User's name: ${data.loggedInUser.contact.name}`);
    },
    function (error) {
      console.error("Error: Failed to get the loggedInUser information");
      console.error(error);
    }
  );
}

/**
 * To open the CTI app
 */
function openApp() {
  client.interface
    .trigger("show", { id: "softphone" })
    .then(function () {
      resizeAppDefault();
      console.log(`Success: Opened the app`);
    })
    .catch(function (error) {
      console.error("Error: Failed to open the app");
      console.error(error);
    });
}

/**
 * To close the CTI app
 */
function closeApp() {
  client.interface
    .trigger("hide", { id: "softphone" })
    .then(function () {
      resizeAppDefault();
      document.getElementById("appTxtNameContact").value = "";
      document.getElementById("appTxtNameContact").innerText = "";

      document.getElementById("appTextPhone").value = "";
      document.getElementById("appTextPhone").innerText = "";
      console.info("successfully closed the CTI app");
      // showNotify("success", "Successfully closed the CTI app.");
    })
    .catch(function (error) {
      console.error("Error: Failed to close the CTI app");
      console.error(error);
    });
}

async function getContactData() {
  document.getElementById("mainListContacts").style.display = "block";
  try {
    // var data = await client.request.invokeTemplate("getContacts", {});
    // var arr = data?.response ? JSON.parse(data?.response) : [];
    // console.log("data contact:", JSON.parse(data?.response));
    // if (arr.length > 0) {
    //   arr.sort((a, b) => {
    //     const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    //     const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    //     if (nameA < nameB) {
    //       return -1;
    //     }
    //     if (nameA > nameB) {
    //       return 1;
    //     }
    //     // names must be equal
    //     return 0;
    //   });
    //   listContacts = [...arr];
    //   renderListContact(listContacts);
    // }
    renderListContact(listContactsExample);
  } catch (error) {
    // Failure operation
    console.log(error);
  }
}

async function filterContactData(phone) {
  console.log("phone view contact:", phone);
  try {
    const data = await client.request.invokeTemplate("filterContacts", {
      context: {
        mobile: parseInt(phone),
      },
    });

    console.log("view a contact:", data);
  } catch (error) {
    console.log(error);
  }
}
async function getContactById(idContact) {
  console.log("phone view contact:", idContact);
  try {
    const data = await client.request.invokeTemplate("getContactById", {
      context: {
        id: parseInt(idContact),
      },
    });
    var detail = data?.response ? JSON.parse(data?.response) : [];
    name_contact = detail?.name ? detail?.name : "";
    document.getElementById("appTxtNameContact").value = name_contact;
    document.getElementById("appTxtNameContact").innerText = name_contact;
    console.log("contact detail:", data);
  } catch (error) {
    console.log(error);
  }
}

/**
 * To listen to click event for phone numbers in the Freshdesk pages and use the clicked phone number
 */
function clickToCall() {
  client.instance.resize({ height: "560px" });
  let textElementPhone = document.getElementById("appTextPhone");
  // let textElementDialpad = document.getElementById("output").value;

  client.events.on("cti.triggerDialer", function (event) {
    openApp();
    document.getElementById("mainContent").style.display = "none";
    document.getElementById("mainCollapseClickToCall").style.display = "none";
    document.getElementById("mainListContacts").style.display = "none";

    document.getElementById("mainOutbound").style.display = "block";

    var data = event.helper.getData();
    console.log("data event.helper :", data);
    textElementPhone.innerText = data.number;
    phoneNumberReceiver = data.number;
    // document.getElementById("output").value = data.number;

    /**làm thé nào de getContact by Id?*/
    getContactById(data?.id);
    filterContactData(data?.number);
    // console.log("aaaaaa:", aaaaaa);

    /**click to call as7*/
    let call = webphone.calls[0];
    if (!call) {
      // click without an active call -> start a video call to number 23
      webphone.makeCall(phoneNumberReceiver, {
        autoOriginate: "doNotPrompt",
        audio: true,
        video: false,
        // subjectOfCall: "PredictiveCall",
      });
    } else if (call.localConnectionInfo == "alerting") {
      // click while we have an alerting call -> accept it
      call.answerCall({ audio: true, video: false });
    } else {
      // otherwise we release the call
      call.clearConnection();
    }
    /**end click to call as7*/
  });
}

/**
 * It opens the contact details page for the give contact id
 *
 * @param {number} contactId - Contact to open
 */
function goToContact(contactId) {
  client.interface
    .trigger("click", { id: "contact", value: contactId })
    .then(function (data) {
      console.log("goToContact:", data);
      console.info("successfully navigated to contact");
    })
    .catch(function (error) {
      console.error("Error: Failed to navigate to contact");
      console.error(error);
    });
}

/**
 * To resize the height of the CTI app
 */
function resizeAppDefault() {
  client.instance.resize({ height: "560px" });
}

let client;
init();
async function init() {
  client = await app.initialized();
  client.events.on("app.activated", onAppActivate);
  client.events.on("app.deactivated", onAppDeactive);
}

function viewScreenCollapseClickToCall() {
  client.instance.resize({ height: "48px" });
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("mainOutbound").style.display = "none";
  document.getElementById("mainListContacts").style.display = "none";
  document.getElementById("mainCollapseClickToCall").style.display = "block";
}

function onAppActivate() {
  resizeAppDefault();

  client.data.get("loggedInUser").then(
    function (data) {
      agent_ref = data?.loggedInUser?.availability?.agent_ref
        ? data?.loggedInUser?.availability?.agent_ref
        : undefined;
      const phone = data.loggedInUser.contact.phone
        ? data.loggedInUser.contact.phone
        : data.loggedInUser.contact.mobile
        ? data.loggedInUser.contact.mobile
        : null;
      window.userPhone = phone;
      console.log("data loggedInUser", data);
      /* Outgoing call functionality */
      // dialpadEvents();
      checkPhone();

      // document
      //   .getElementById("btnShowContact")
      //   .addEventListener("fwClick", getContactData);

      // addEventListeners();
      /* Adding event handlers for all the buttons in the UI of the app */
      document.getElementById("btnClose").addEventListener("fwClick", closeApp);
      document
        .getElementById("btnClose1")
        .addEventListener("fwClick", closeApp);

      document.getElementById("mainContent").style.display = "block";
      document.getElementById("mainOutbound").style.display = "none";
      document.getElementById("mainCollapseClickToCall").style.display = "none";
      document.getElementById("mainListContacts").style.display = "none";

      // thu gon màn hinh khi callbtnCollapseClickToCall
      document
        .getElementById("btnCollapseClickToCall")
        .addEventListener("fwClick", viewScreenCollapseClickToCall);

      // mo rong man hinh click to call
      document
        .getElementById("mainCollapseClickToCall")
        .addEventListener("click", () => {
          resizeAppDefault();
          document.getElementById("mainCollapseClickToCall").style.display =
            "none";
          document.getElementById("mainContent").style.display = "none";
          document.getElementById("mainOutbound").style.display = "block";
        });

      /**End Call **/
      document.getElementById("toggleEndCall").addEventListener("click", () => {
        client.interface
          .trigger("hide", { id: "softphone" })
          .then(function () {
            document.getElementById("mainContent").style.display = "block";
            document.getElementById("mainOutbound").style.display = "none";
            document.getElementById("mainCollapseClickToCall").style.display =
              "none";

            phoneNumberReceiver = document.getElementById("output").value = "";
            document.getElementById("appTextPhone").value = "";
            document.getElementById("appTextPhone").innerText = "";
            /**as7 backend **/
            let call = webphone.calls[0];
            call.clearConnection();
            /**as7 backend **/
            onAppDeactive();
            resizeAppDefault();
            // console.info("successfully closed the CTI app");
          })
          .catch(function (error) {
            console.error("Error: Failed to close the CTI app");
            console.error(error);
          });
      });

      // ------ ----
      document
        .getElementById("toggleEndCallCollapse")
        .addEventListener("click", () => {
          client.interface
            .trigger("hide", { id: "softphone" })
            .then(function () {
              document.getElementById("mainContent").style.display = "block";
              document.getElementById("mainOutbound").style.display = "none";
              document.getElementById("mainCollapseClickToCall").style.display =
                "none";
              document.getElementById("mainListContacts").style.display =
                "none";

              phoneNumberReceiver = document.getElementById("output").value =
                "";
              document.getElementById("appTextPhone").value = "";
              document.getElementById("appTextPhone").innerText = "";
              /**as7 backend **/
              let call = webphone.calls[0];
              call.clearConnection();
              /**as7 backend **/
              onAppDeactive();
              // console.info("successfully closed the CTI app");
            })
            .catch(function (error) {
              console.error("Error: Failed to close the CTI app");
              console.error(error);
            });
        });
      /**End Call **/

      /* Click-to-call event should be called inside the app.activated life-cycle event to always listen to the event */
      clickToCall();

      console.info("App is activated");
    },
    function (error) {
      console.error("Failed to get logged in user data");
      console.error(error);
      showNotify("danger", "Failed to get user data. Try again later.");
    }
  );
}
function onAppDeactive() {
  closeApp();
  console.info("App is deactivated");
}

function checkPhone() {
  var x = document.getElementById("output");
  // var phoneNumber = /^\d{10}$/;
  if (x.value.includes("+")) {
    var phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,5}$/;
    if (x.value.match(phone) && x.value.length == 12) {
      eventHandlecallDialpad();
    } else {
      $("#callEnter").attr("disabled", true);
      $("#callEnter").css({ backgroundColor: "darkgray" });
      if (x.value.length === 0) {
        document.getElementById("appTextPhone1").innerText = "Correct";
        document.getElementById("appTextPhone1").className =
          "correct__number__phone";
      } else
        document.getElementById("appTextPhone1").className =
          "error__number__phone";
      document.getElementById("appTextPhone1").innerText =
        "Incorrect phone number format";
      return false;
    }
  } else {
    var phone = /^\d{10}$/;
    if (x.value.match(phone)) {
      eventHandlecallDialpad();
    } else {
      $("#callEnter").attr("disabled", true);
      $("#callEnter").css({ backgroundColor: "darkgray" });
      if (x.value.length === 0) {
        document.getElementById("appTextPhone1").innerText = "Correct";
        document.getElementById("appTextPhone1").className =
          "correct__number__phone";
      } else
        document.getElementById("appTextPhone1").className =
          "error__number__phone";
      document.getElementById("appTextPhone1").innerText =
        "Incorrect phone number format";
      return false;
    }
  }
}

/**
 * Adds dialer events
 **/
var count = 0;
$(".digit").on("click", function () {
  var num = $(this).clone().children().remove().end().text();
  // $("#output1").append("<span>" + num.trim() + "</span>");
  var prevOutput = document.getElementById("output").value;
  document.getElementById("output").value = prevOutput + num;
  count++;
  checkPhone();
});

function ResetTxtPhone() {
  var x = document.getElementById("output").value;
  document.getElementById("output").value = x.substring(0, x.length - 1);
  checkPhone();
}

/**
 * call dialpad events
 **/
function eventHandlecallDialpad() {
  $("#callEnter").attr("disabled", false);
  $("#callEnter").css({ backgroundColor: "green" });
  document.getElementById("appTextPhone1").innerText = "Correct";
  document.getElementById("appTextPhone1").className = "correct__number__phone";
  /**Call tu man hinh dialpad **/
  document.getElementById("callEnter").addEventListener("click", () => {
    openApp();
    let textElementDialpad = document.getElementById("output").value;
    document.getElementById("mainContent").style.display = "none";
    document.getElementById("mainOutbound").style.display = "block";
    document.getElementById("mainCollapseClickToCall").style.display = "none";

    phoneNumberReceiver = textElementDialpad;
    document.getElementById("appTextPhone").value = phoneNumberReceiver;
    document.getElementById("appTextPhone").innerText = phoneNumberReceiver;

    //filter contacts
    filterContacts("%2B84353293254");

    /**click to call as7*/
    let call = webphone.calls[0];
    if (!call) {
      // click without an active call -> start a video call to number 23
      webphone.makeCall(phoneNumberReceiver, {
        autoOriginate: "doNotPrompt",
        audio: true,
        video: false,
      });
    } else if (call.localConnectionInfo == "alerting") {
      // click while we have an alerting call -> accept it
      call.answerCall({ audio: true, video: true });
    } else {
      // otherwise we release the call
      call.clearConnection();
      console.log("call.clearConnection()", call.clearConnection());
    }
    /**end click to call as7*/
  });
  /**Call tu man hinh dialpad **/

  // return true;
}

function filterContacts(value) {
  filterContactData(value);
}

function showContact() {
  // client.instance.resize({ height: "900px" });
  document.getElementById("mainListContacts").style.display = "block";
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("mainOutbound").style.display = "none";
  document.getElementById("mainCollapseClickToCall").style.display = "none";

  getContactData();
}

function renderListContact(listContacts) {
  document.getElementById("listContact").innerHTML = listContacts
    .map((contact) => {
      return `<li>
      <div class="relative">
        <div class="avt">
          <img src="./images/avatar.png" class="img-circle list-user-avatar">
        </div>
        <div class="absolute user-info">
          <p class="user-name">
            <b>${contact.name}</b>
          </p>
          <p class="user__phone"
            attr-user-phone="${
              contact?.mobile ? contact?.mobile : contact?.phone
            }" 
            attr-user-contact="${contact?.name ? contact?.name : "unknown"}"
            onclick="clickContactCall(this)" >
            <span class="" id="userPhoneContact">${
              contact?.mobile ? contact?.mobile : contact?.phone
            }</span>
          </p>
        </div>
        <div class="absolute-info action">
          <span id="customer-link" attr-id-contact="${
            contact?.id
          }" onclick="redirectContactInfo(this)">
            <img src="./images/icon-info.png">
          </span>
        </div>
      </div>
    </li>`;
      //  <li>${contact.name}</li>`;
    })
    .join("");
}

function enableCharacterContact(elem) {
  let def = document.getElementById("valueShowCharacter").value;
  let id = $(elem).attr("id");

  if (def === "default" || (def !== id && def !== "")) {
    document.getElementById("showCharacter").innerText = id;
    document.getElementById("valueShowCharacter").value = id;
    let filteredNames = listContactsExample.filter((item) =>
      item.name.startsWith(id, 0)
    );
    renderListContact(filteredNames);
    console.log("filteredNames", filteredNames);
  } else if (def === id) {
    document.getElementById("showCharacter").innerText = "";
    renderListContact(listContactsExample);
  }
}

function clickContactCall(elem) {
  let phone_contact = $(elem).attr("attr-user-phone");
  let name_contact = $(elem).attr("attr-user-contact");
  console.log("vvavav", phone_contact);
  if (phone_contact !== "null") {
    //show app
    client.interface
      .trigger("show", { id: "softphone" })
      .then(function () {
        resizeAppDefault();
        console.log(`Success: Opened the app`);

        document.getElementById("mainContent").style.display = "none";
        document.getElementById("mainCollapseClickToCall").style.display =
          "none";
        document.getElementById("mainListContacts").style.display = "none";
        document.getElementById("mainOutbound").style.display = "block";

        document.getElementById("appTxtNameContact").value = name_contact;
        document.getElementById("appTxtNameContact").innerText = name_contact;

        document.getElementById("appTextPhone").value = phone_contact;
        document.getElementById("appTextPhone").innerText = phone_contact;

        let call = webphone.calls[0];
        if (!call) {
          // click without an active call -> start a video call to number 23
          webphone.makeCall(phone_contact, {
            autoOriginate: "doNotPrompt",
            audio: true,
            video: false,
          });
        } else if (call.localConnectionInfo == "alerting") {
          // click while we have an alerting call -> accept it
          call.answerCall({ audio: true, video: true });
        } else {
          // otherwise we release the call
          call.clearConnection();
          onAppDeactive();
        }
        /**Call tu man hinh dialpad **/
      })
      .catch(function (error) {
        console.error("Error: Failed to open the app");
        console.error(error);
      });
  } else return null;
}

function redirectContactInfo(elem) {
  let contactId = $(elem).attr("attr-id-contact");

  console.log(contactId);
  isMainActive = true;

  let str = agent_ref;
  let sindex = agent_ref.lastIndexOf(".freshdesk.com");
  console.log("Vị trí của chuỗi toidicode trong des là bao nhieu: " + sindex);
  let a = str.slice(0, sindex);
  const urlParams = a + ".freshdesk.com/a/contacts/" + contactId;
  window.open(urlParams, "_blank");

  // client.interface
  //   .trigger("click", { id: "contact", value: contactId })
  //   .then(function (data) {
  //     showContact();
  //     // document.getElementById("mainListContacts").style.display = "block";
  //     // document.getElementById("mainContent").style.display = "none";
  //     // document.getElementById("mainCollapseClickToCall").style.display =
  //     //   "none";
  //     // document.getElementById("mainOutbound").style.display = "none";
  //     console.info("successfully navigated to contact", data);
  //   })
  //   .catch(function (error) {
  //     console.error("Error: Failed to navigate to contact");
  //     console.error(error);
  //   });

  // client.interface
  //   .trigger("show", { id: "softphone" })
  //   .then(function () {
  //     resizeAppDefault();
  //     document.getElementById("mainListContacts").style.display = "block";

  //     console.log(`Success: Opened the app`);
  //   })
  //   .catch(function (error) {
  //     console.error("Error: Failed to open the app");
  //     console.error(error);
  //   });
}
