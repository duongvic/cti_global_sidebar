let username = "";
let password = "";
let sip = "";

let idContact = "";
let nameContact = "";
let avtarContact = "";
let emailContact = "";
let phoneNumberReceiver = "";
let isInboundCall = false;
let existContact = false;
let isUpdateCallAs7 = false;

let isMainOutbound = false;
let isMainInbound = false;

let isMainCollapse = "";

let current_page = 1;
let listContacts = [];
let listHisCall = [];
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
isMainContactActive = false;

/**as7 backend **/
let agent = anCti.newAgent();
let webphone;
let audio = new Audio();
audio.autoplay = true;

const options = {
  avatars: true,
};

agent.startApplicationSession({
  // username: "duongnh4@fpt.com",
  // password: "DuongNH4!!!",
  username: "phuln6@fpt.com",
  password: "Phuln6!!!",
});
agent.on("applicationsessionstarted", () => {
  // webphone = agent.getDevice("sip:1073@term.133");
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

// click start stop action button
var input = document.testMic.savereportMic;
function mic(x) {
  x.classList.toggle("mic");
  if (input.value === String(false)) {
    input.value = "true";
    let call = webphone.calls[0];
    call.updateCall({
      audio: "false",
    });
    clearInterval(interval);
    clearInterval(intervalOutCollapse),
      clearInterval(intervalInbound),
      clearInterval(intervalInboundListenCollapse);
    isUpdateCallAs7 = true;
  } else {
    input.value = "false";
    let call = webphone.calls[0];
    call.updateCall({
      audio: "true",
    });
    clearInterval(interval);
    clearInterval(intervalOutCollapse),
      clearInterval(intervalInbound),
      clearInterval(intervalInboundListenCollapse);
    isUpdateCallAs7 = true;
  }
}
var input = document.testHold_Unhold.savereportHold_Unhold;
function change(x) {
  x.classList.toggle("change");
  if (input.value === String(false)) {
    input.value = "true";
    let call = webphone.calls[0];
    call.holdCall();

    clearInterval(interval);
    clearInterval(intervalOutCollapse),
      clearInterval(intervalInbound),
      clearInterval(intervalInboundListenCollapse);
    isUpdateCallAs7 = true;
  } else {
    input.value = "false";
    let call = webphone.calls[0];
    call.retrieveCall();

    clearInterval(interval);
    clearInterval(intervalOutCollapse),
      clearInterval(intervalInbound),
      clearInterval(intervalInboundListenCollapse);
    isUpdateCallAs7 = true;
  }
}

var input = document.testMicInbound.savereportMicInbound;
function mic(x) {
  x.classList.toggle("mic");
  if (input.value === String(false)) {
    input.value = "true";
    let call = webphone.calls[0];
    call.updateCall({
      audio: "false",
    });
    clearInterval(interval);
    clearInterval(intervalOutCollapse),
      clearInterval(intervalInbound),
      clearInterval(intervalInboundListenCollapse);
    isUpdateCallAs7 = true;
  } else {
    input.value = "false";
    let call = webphone.calls[0];
    call.updateCall({
      audio: "true",
    });
    clearInterval(interval);
    clearInterval(intervalOutCollapse),
      clearInterval(intervalInbound),
      clearInterval(intervalInboundListenCollapse);
    isUpdateCallAs7 = true;
  }
}
var input = document.testInboundHold_Unhold.savereportInbound_Hold_Unhold;
function change(x) {
  x.classList.toggle("change");
  if (input.value === String(false)) {
    input.value = "true";
    let call = webphone.calls[0];
    call.holdCall();

    clearInterval(interval);
    clearInterval(intervalOutCollapse),
      clearInterval(intervalInbound),
      clearInterval(intervalInboundListenCollapse);
    isUpdateCallAs7 = true;
  } else {
    input.value = "false";
    let call = webphone.calls[0];
    call.retrieveCall();

    clearInterval(interval);
    clearInterval(intervalOutCollapse),
      clearInterval(intervalInbound),
      clearInterval(intervalInboundListenCollapse);
    isUpdateCallAs7 = true;
  }
}

// timer call
let ret = document.getElementById("timer");
let retCollapse = document.getElementById("timerCollapse");
let retTimerInboundListen = document.getElementById("timerInboundListen");
let nameNotListen = document.getElementById("nameNotListen");
let retTimerInboundListenCollapse = document.getElementById(
  "timerInboundListenCollapse"
);
let retTimerInbound = document.getElementById("timerInbound");

let counter = 0;
let counter_time_collapse = 0;
let counter_time_inbound = 0;
let counter_time_inbound_listen_collapse = 0;

let interval,
  intervalOutCollapse,
  intervalInbound,
  intervalInboundListenCollapse;

function convertSec(cnt) {
  let sec = cnt % 60;
  let min = Math.floor(cnt / 60);
  if (sec < 10) {
    if (min < 10) {
      return "0" + min + ":0" + sec;
    } else {
      return min + ":0" + sec;
    }
  } else if (min < 10 && sec >= 10) {
    return "0" + min + ":" + sec;
  } else {
    return min + ":" + sec;
  }
}

function start() {
  interval = setInterval(function () {
    document.getElementById("timer").textContent = convertSec(counter++);
    // console.log("goi start time Outbound");
  }, 1000);
}

function startTimeCollapse() {
  intervalOutCollapse = setInterval(function () {
    document.getElementById("timerCollapse").textContent = convertSec(
      counter_time_collapse++
    );
    // console.log("goi start time Outbound Collapse");
  }, 1000);
}

function startTimeInbound() {
  intervalInbound = setInterval(function () {
    document.getElementById("timerInboundListen").textContent = convertSec(
      counter_time_inbound++
    );
    // console.log("goi start time Inbound Listen");
  }, 1000);
}

function startTimeInboundListenCollapse() {
  intervalInboundListenCollapse = setInterval(function () {
    document.getElementById("timerInboundListenCollapse").textContent =
      convertSec(counter_time_inbound_listen_collapse++);
    // console.log("goi start time InboundListenCollapse");
  }, 1000);
}

function stop() {
  ret.innerHTML = "";
  retCollapse.innerHTML = "";
  retTimerInboundListen.innerHTML = "";
  nameNotListen.textContent = "";
  retTimerInboundListenCollapse.innerHTML = "";
  retTimerInbound.innerHTML = "";
  clearInterval(interval);
  clearInterval(intervalOutCollapse);
  clearInterval(intervalInbound);
  clearInterval(intervalInboundListenCollapse);
}

agent.on("call", (event) => {
  let call = event.call;
  switch (call.localConnectionInfo) {
    case "alerting": // call inbound gọi
      console.log(`incomming call from ${call.number} ${call.name}`);
      console.log("chạy 1 alerting");
      isInboundCall = true;
      console.log("isMainActive", isMainActive);
      client.interface
        .trigger("show", { id: "softphone" })
        .then(function () {
          client.data.get("loggedInUser").then(async function (data) {
            agent_ref = data?.loggedInUser?.availability?.agent_ref
              ? data?.loggedInUser?.availability?.agent_ref
              : undefined;
            const phone = data?.loggedInUser?.contact?.phone
              ? data?.loggedInUser?.contact?.phone
              : data?.loggedInUser?.contact?.mobile
              ? data?.loggedInUser?.contact?.mobile
              : null;
            window.userPhone = phone;
            console.log("data loggedInUser Inbound", data);

            console.log("existContact trươc khi check", existContact);
            //check contact
            // await filterContactDataInbound(call?.number);
            await filteredContactSearch(call?.number);
            console.log("existContact sau khi check", existContact);
            document.getElementById("appTextPhoneInbound").value = call?.number;
            document.getElementById("appTextPhoneInbound").innerText =
              call?.number;
            document.getElementById("appTextPhoneInboundListen").value =
              call?.number;
            document.getElementById("appTextPhoneInboundListen").innerText =
              call?.number;
            phoneNumberReceiver = call?.number;
            if (existContact) {
              goToContact(idContact);
            }
            resizeAppDefault();
            viewMainInbound();
          });
        })
        .catch(function (error) {
          isInboundCall = false;
          console.error("Error: Failed to open the app");
          console.error(error);
        });

      console.log("isInboundCall alerting", isInboundCall);
      break;
    case "connected":
      console.log(` khi người dùng nghe máy : connected to ${call.number}`);
      console.log("connected to man hinh:", isMainActive);
      if (isInboundCall !== true) {
        start();
        startTimeCollapse();
        //tạo ticket khi tồn tại khách hàng trong hệ thống
        console.log(
          "chạy vao đay không connected isUpdateCallAs7 = ",
          isUpdateCallAs7
        );
        console.log(
          "chạy vao đay không connected existContact = ",
          existContact
        );

        if (!isUpdateCallAs7) {
          if (existContact) {
            createTicket();
          } else {
            createContact();
          }
        }
      }

      if (isMainActive && isInboundCall) {
        startTimeInbound();
        startTimeInboundListenCollapse();
        //tạo ticket khi tồn tại khách hàng trong hệ thống
        if (!isUpdateCallAs7) {
          if (existContact) {
            console.log("chạy vao đay không? inbound");
            createTicket();
          } else {
            createContact();
          }
        }
      } else if (!isMainActive && !isInboundCall) {
        clearInterval(intervalInbound);
      }
      break;
    case "fail":
      console.log(`call failed, cause is ${event.content.cause}`);
      break;
    case "hold":
      console.log(`holding call to ${call.number}`);
      isUpdateCallAs7 = true;
      break;
    case "null":
      console.log(`call to ${call.number} is gone. Cancel`);
      // let call = webphone.calls[0];
      // call.clearConnection();

      // document.getElementById("mainContent").style.display = "block";
      // document.getElementById("mainOutbound").style.display = "none";
      // document.getElementById("mainBusyCall").style.display = "none";
      // document.getElementById("mainCollapseClickToCall").style.display = "none";

      // document.getElementById("mainListContacts").style.display = "none";
      // document.getElementById("mainListHistoryCall").style.display = "none";

      // document.getElementById("mainInbound").style.display = "none";
      // document.getElementById("mainInboundCollapse").style.display = "none";
      // document.getElementById("mainInboundListen").style.display = "none";
      // document.getElementById("mainInboundListenCollapse").style.display =
      //   "none";

      // document.getElementById("appTextPhone").value = "";
      // document.getElementById("appTextPhone").innerText = "";
      // document.getElementById("appTextPhoneBusyCall").value = "";
      // document.getElementById("appTextPhoneBusyCall").innerText = "";

      // document.getElementById("output").value = "";
      // document.getElementById("output").innerText = "";
      // $("#callEnter").attr("disabled", true);
      // $("#callEnter").css({ backgroundColor: "darkgray" });

      // document.getElementById("timer").value = "";
      // document.getElementById("timer").innerText = "";

      // ret.innerHTML = "";
      // retCollapse.innerHTML = "";
      // retTimerInboundListen.innerHTML = "";
      // nameNotListen.textContent = "";
      // retTimerInboundListenCollapse.innerHTML = "";

      // isInboundCall = false;
      // isMainActive = false;
      // isMainContactActive = false;
      // isMainInbound = false;
      // isMainOutbound = false;
      // existContact = false;

      // idContact = "";
      // nameContact = "";
      // phoneNumberReceiver = "";
      // emailContact = "";

      stop();
      onAppDeactive();
      // location.reload();
      break;
  }
});

agent.on("call", (event) => {
  if (event?.content?.cause == "busy") {
    console.log("trường hợp máy bận :", event?.content?.cause);
    ///view màn bận

    client.interface
      .trigger("show", { id: "softphone" })
      .then(function () {
        resizeAppDefault();
        document.getElementById("mainBusyCall").style.display = "block";
        document.getElementById("mainContent").style.display = "none";
        document.getElementById("mainOutbound").style.display = "none";
        document.getElementById("mainCollapseClickToCall").style.display =
          "none";
        document.getElementById("mainListContacts").style.display = "none";
        document.getElementById("mainListHistoryCall").style.display = "none";
        document.getElementById("mainInbound").style.display = "none";
        document.getElementById("mainInboundCollapse").style.display = "none";
        document.getElementById("mainInboundListen").style.display = "none";
        document.getElementById("mainInboundListenCollapse").style.display =
          "none";

        document.getElementById("appTextPhoneBusyCall").textContent =
          phoneNumberReceiver;

        document.getElementById("appTxtNameContactBusyCall").textContent =
          nameContact ? nameContact : phoneNumberReceiver;

        $("#appTxtNameContactBusyCall").css({ color: "#3b3b3b" });
      })
      .catch(function (error) {
        console.error("Error: Failed to open the app");
        console.error(error);
      });
  }
});

// navigator.mediaDevices.enumerateDevices().then((mediaDevices) => {
//   mediaDevices
//     .filter(({ kind }) => kind == "audioinput")
//     .forEach((dev) => {
//       console.log(`${dev.label} => ${dev.deviceId}`);
//     });
// });

/**as7 backend **/

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

function resetText() {
  document.getElementById("appTxtNameContact").value = "";
  document.getElementById("appTxtNameContact").innerText = "";
  document.getElementById("appTextPhone").value = "";
  document.getElementById("appTextPhone").innerText = "";

  document.getElementById("appTxtNameContactBusyCall").value = "";
  document.getElementById("appTxtNameContactBusyCall").innerText = "";
  document.getElementById("appTextPhoneBusyCall").value = "";
  document.getElementById("appTextPhoneBusyCall").innerText = "";

  document.getElementById("output").value = "";
  document.getElementById("output").innerText = "";

  $("#callEnter").attr("disabled", true);
  $("#callEnter").css({ backgroundColor: "darkgray" });

  document.getElementById("timer").textContent = "";
  document.getElementById("timerCollapse").textContent = "";

  document.getElementById("nameNotListen").textContent = "";

  document.getElementById("timerInboundListen").textContent = "";
  document.getElementById("timerInboundListenCollapse").textContent = "";

  existContact = false;
  phoneNumberReceiver = "";
  nameContact = "";
  idContact = "";
  emailContact = "";

  isInboundCall = false;
  isMainOutbound = false;
  isMainInbound = false;
  isMainContactActive = false;
  isMainActive = false;
}
/**
 * To close the CTI app
 */
function closeApp() {
  client.interface
    .trigger("hide", { id: "softphone" })
    .then(function () {
      resizeAppDefault();
      resetText();
      // ret.innerHTML = "00:00:00";
      // console.info("successfully closed the CTI app");
      // showNotify("success", "Successfully closed the CTI app.");
      location.reload();
    })
    .catch(function (error) {
      console.error("Error: Failed to close the CTI app");
      console.error(error);
    });
}

async function getContactData(page) {
  try {
    var data = await client.request.invokeTemplate("getContacts", {
      context: {
        page: page ? page : 1,
      },
    });
    var arr = data?.response ? JSON.parse(data?.response) : [];
    console.log("data contact:", JSON.parse(data?.response));
    if (arr.length > 0) {
      arr.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      listContacts = [...arr];
      localStorage.setItem("cacheDataContact", JSON.stringify(listContacts));

      renderListContact(listContacts);
    } else {
      let newData = JSON.parse(localStorage.getItem("cacheDataContact"));
      listContacts = [...newData, ...arr];
      // console.log("newew dâttaa", listContacts);
      localStorage.setItem("cacheDataContact", JSON.stringify(listContacts));
      current_page = page;
      renderListContact(listContacts);
    }
  } catch (error) {
    // Failure operation
    console.log(error);
  }
}

async function fetchContactData(page) {
  // console.log("page", page);
  if (page == 1) {
    current_page = 2;
  } else if (page > 1) {
    current_page = page;
  }
  console.log("current_page", current_page);
  try {
    var data = await client.request.invokeTemplate("getContacts", {
      context: {
        page: current_page ? current_page : 1,
      },
    });
    var arr = data?.response ? JSON.parse(data?.response) : [];
    console.log("data contact:", JSON.parse(data?.response));
    if (arr.length > 0) {
      arr.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      var newData = [...arr];
      let oldData = JSON.parse(localStorage.getItem("cacheDataContact"));
      listContacts = [...oldData, ...newData];
      // console.log("newData", listContacts);
      localStorage.setItem("cacheDataContact", JSON.stringify(listContacts));
      renderListContact(listContacts);
      current_page = current_page + 1;
      console.log("after curteent page", current_page);
    } else {
      let newData = JSON.parse(localStorage.getItem("cacheDataContact"));
      listContacts = [...newData];
      // console.log("newData rõng []", listContacts);
      localStorage.setItem("cacheDataContact", JSON.stringify(listContacts));
      current_page = page;
      // console.log("current_page rỗng ", current_page);
      renderListContact(listContacts);
    }
  } catch (error) {
    // Failure operation
    console.log(error);
  }
}

async function filterContactDataInbound(phone) {
  console.log("phone,phone", phone);
  try {
    const data = await client.request.invokeTemplate("filterContacts", {
      context: {
        mobile: encodeURIComponent(phone),
      },
    });
    var detail = data?.response ? JSON.parse(data?.response) : [];
    console.log("filterContactDataInbound context:", detail);
    // kiểm tra số phone có trong hệ thống không
    if (detail?.length > 0) {
      existContact = true;
      document.getElementById("appTxtNameContactInbound").value =
        detail[0].name;
      document.getElementById("appTxtNameContactInbound").innerText =
        detail[0].name;
      document.getElementById("appTxtNameContactInboundListen").value =
        detail[0].name;
      document.getElementById("appTxtNameContactInboundListen").innerText =
        detail[0].name;
      phoneNumberReceiver = phone;
      nameContact = detail[0].name;
      emailContact = detail[0].email;
      idContact = detail[0].id;
    } else {
      existContact = false;
      document.getElementById("appTextPhoneInbound").style.fontSize = "22px";
      document.getElementById("appTextPhoneInbound").style.padding = "10px 0px";
      document.getElementById("appTextPhoneInboundListen").style.fontSize =
        "22px";
      document.getElementById("appTextPhoneInboundListen").style.padding =
        "9px 0px";
      nameContact = "";
      idContact = "";
      emailContact = "";
    }
    console.log("filterContactDataInbound ton tai:", existContact);
    // return detail;
  } catch (error) {
    existContact = false;
    console.log(error);
  }
}

async function filteredContactSearch(term) {
  try {
    const data = await client.request.invokeTemplate("filteredContactSearch", {
      context: {
        term: term,
      },
    });
    let detail = data?.response ? JSON.parse(data?.response) : [];

    let filteredDataMobile = detail.filter((item) => item.mobile === term);
    let filteredDataPhone = detail.filter((item) => item.phone === term);
    console.log("filteredDataMobile", filteredDataMobile);
    console.log("filteredDataPhone", filteredDataPhone);

    if (filteredDataMobile.length > 0) {
      existContact = true;
      idContact = filteredDataMobile[0].id;
      document.getElementById("appTxtNameContactInbound").textContent =
        filteredDataMobile[0].name;
      document.getElementById("appTxtNameContactInboundListen").textContent =
        filteredDataMobile[0].name;
      document.getElementById("appTxtNameContact").textContent =
        filteredDataMobile[0].name;

      document.getElementById("appTextPhoneInbound").style.fontSize = "14px";
      document.getElementById("appTextPhoneInbound").style.padding = "0px 0px";

      document.getElementById("appTextPhoneInboundListen").style.fontSize =
        "14px";
      document.getElementById("appTextPhoneInboundListen").style.padding =
        "0px 0px";

      nameContact = filteredDataMobile[0].name;
      getContactById(filteredDataMobile[0].id);
      // goToContact(filteredDataMobile[0].id);
      return renderListContact(detail);
    } else if (filteredDataPhone.length > 0) {
      existContact = true;
      idContact = filteredDataPhone[0].id;
      document.getElementById("appTxtNameContactInbound").textContent =
        filteredDataPhone[0].name;
      document.getElementById("appTxtNameContactInboundListen").textContent =
        filteredDataPhone[0].name;
      document.getElementById("appTxtNameContact").textContent =
        filteredDataPhone[0].name;

      document.getElementById("appTextPhoneInboundListen").style.fontSize =
        "14px";
      document.getElementById("appTextPhoneInboundListen").style.padding =
        "0px 0px";

      document.getElementById("appTextPhoneInbound").style.fontSize = "14px";
      document.getElementById("appTextPhoneInbound").style.padding = "0px 0px";
      nameContact = filteredDataPhone[0].name;
      getContactById(filteredDataPhone[0].id);
      // goToContact(filteredDataMobile[0].id);
      return renderListContact(detail);
    } else if (
      filteredDataMobile.length <= 0 ||
      filteredDataPhone.length <= 0
    ) {
      existContact = false;
      document.getElementById("appTextPhone").style.fontSize = "20px";
      document.getElementById("appTextPhone").style.padding = "10px 0px";
      nameContact = "";
      // document.getElementById("appTxtNameContact").innerText =
      //   "contact not exist";
      // document.getElementById("appTxtNameContact").value = "contact not exist";
      // document.getElementById("appTxtNameContact").style.color = "#3b3b3b";
      current_page = 1;
      renderListContactEmpty;
    }
    console.log("existContact", existContact);
    console.log("filteredContactSearch contact:", detail);
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(id_contact) {
  try {
    const data = await client.request.invokeTemplate("getContactById", {
      context: {
        id: parseInt(id_contact),
      },
    });
    var detail = data?.response ? JSON.parse(data?.response) : [];

    if (Object.keys(detail).length > 0) {
      existContact = true;
      idContact = id_contact;
      emailContact = detail.email;
      nameContact = detail.name;
      // document.getElementById("appTxtNameContact").value = name_contact;
      // document.getElementById("appTxtNameContact").innerText = name_contact;
      document.getElementById("appTxtNameContact").textContent = nameContact;
      avtarContact = detail?.avatar?.avatar_url;
      document.getElementById("avatarContact").src = avtarContact;
    } else {
      existContact = false;
      nameContact = "";
      emailContact = "";
      document.getElementById("appTextPhone").style.fontSize = "20px";
      document.getElementById("appTextPhone").style.padding = "10px 0px";
    }
    console.log("existContact:", existContact);
    console.log("detail getContactById:", detail);
  } catch (error) {
    console.log(error);
  }
}

/**
 * To listen to click event for phone numbers in the Freshdesk pages and use the clicked phone number
 */
function clickToCall() {
  // client.instance.resize({ height: "560px" });
  let textElementPhone = document.getElementById("appTextPhone");
  // let textElementDialpad = document.getElementById("output").value;
  isMainOutbound = true;
  client.events.on("cti.triggerDialer", function (event) {
    openApp();
    document.getElementById("mainContent").style.display = "none";
    document.getElementById("mainOutbound").style.display = "block";
    document.getElementById("mainBusyCall").style.display = "none";
    document.getElementById("mainCollapseClickToCall").style.display = "none";
    document.getElementById("mainListContacts").style.display = "none";
    document.getElementById("mainListHistoryCall").style.display = "none";
    document.getElementById("mainInbound").style.display = "none";
    document.getElementById("mainInboundCollapse").style.display = "none";
    document.getElementById("mainInboundListen").style.display = "none";
    document.getElementById("mainInboundListenCollapse").style.display = "none";

    var data = event.helper.getData();
    console.log("data event.helper :", data);
    textElementPhone.innerText = data.number;
    phoneNumberReceiver = data.number;
    isInboundCall = false;
    getContactById(data?.id);

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
      onAppDeactive();
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
 * It opens the contact details page for the give contact id
 *
 * @param {number} ticketId - Contact to open
 */
function goToTicket(ticketId) {
  client.interface
    .trigger("click", { id: "ticket", value: ticketId })
    .then(function (data) {
      console.log("goToTicket:", data);
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

function viewScreenCollapseClickToCall() {
  isMainCollapse = "mainCollapse";
  client.instance.resize({ height: "48px" });
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("mainOutbound").style.display = "none";
  document.getElementById("mainBusyCall").style.display = "none";
  document.getElementById("mainCollapseClickToCall").style.display = "block";
  document.getElementById("mainListContacts").style.display = "none";
  document.getElementById("mainListHistoryCall").style.display = "none";
  document.getElementById("mainInbound").style.display = "none";
  document.getElementById("mainInboundCollapse").style.display = "none";
  document.getElementById("mainInboundListen").style.display = "none";
  document.getElementById("mainInboundListenCollapse").style.display = "none";

  // client.interface
  //   .trigger("show", { id: "softphone" })
  //   .then(function () {
  //     client.instance.resize({ height: "48px" });
  //     document.getElementById("mainCollapseClickToCall").style.display =
  //       "block";
  //     document.getElementById("mainContent").style.display = "none";
  //     document.getElementById("mainOutbound").style.display = "none";
  //     document.getElementById("mainBusyCall").style.display = "none";
  //     document.getElementById("mainListContacts").style.display = "none";
  //     document.getElementById("mainListHistoryCall").style.display = "none";
  //     document.getElementById("mainInbound").style.display = "none";
  //     document.getElementById("mainInboundCollapse").style.display = "none";
  //     document.getElementById("mainInboundListen").style.display = "none";
  //     document.getElementById("mainInboundListenCollapse").style.display =
  //       "none";
  //   })
  //   .catch(function (error) {
  //     console.error("Error: Failed to open the app");
  //     console.error(error);
  //   });
}

function viewScreenCollapseClickInBound() {
  client.instance.resize({ height: "48px" });
  document.getElementById("mainInboundCollapse").style.display = "block";
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("mainOutbound").style.display = "none";
  document.getElementById("mainBusyCall").style.display = "none";
  document.getElementById("mainCollapseClickToCall").style.display = "none";
  document.getElementById("mainListContacts").style.display = "none";
  document.getElementById("mainListHistoryCall").style.display = "none";
  document.getElementById("mainInbound").style.display = "none";
  document.getElementById("mainInboundListen").style.display = "none";
  document.getElementById("mainInboundListenCollapse").style.display = "none";

  nameNotListen.textContent =
    nameContact != "" ? nameContact : phoneNumberReceiver;
}

// viewScreeInboundListenCollapse;

let client;
init();
async function init() {
  client = await app.initialized();
  client.events.on("app.activated", onAppActivate);
  client.events.on("app.deactivated", onAppDeactive);
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

      //Getting all iparams
      // client.iparams.get().then(logData).catch(logError);

      client.iparams.get().then(function (data) {
        console.log("iparams:", data);
      });

      // isMainOutbound = false;
      current_page = 1;

      // addEventListeners();
      /* Adding event handlers for all the buttons in the UI of the app */
      document.getElementById("btnClose").addEventListener("fwClick", closeApp);
      document
        .getElementById("btnClose1")
        .addEventListener("fwClick", closeApp);
      document
        .getElementById("btnCloseHistoryCall")
        .addEventListener("fwClick", closeApp);

      if (isMainCollapse == "mainCollapse") {
        client.instance.resize({ height: "48px" });
      }
      // showMain();
      // if (!isMainActive) {
      // showMain();
      // }
      // if (isMainContactActive) {
      //   showContact();
      // }
      document.getElementById("appTextPhone1").innerText = "Correct";
      document.getElementById("appTextPhone1").className =
        "correct__number__phone";

      // console.log("isMainOutbound", isMainOutbound);
      // console.log("isMainInbound", isMainInbound);
      // console.log("isMainActive", isMainActive);
      // console.log("isMainContactActive", isMainContactActive);

      // thu nhỏ màn hinh khi callbtnCollapseClickToCall
      document
        .getElementById("btnCollapseClickToCall")
        .addEventListener("fwClick", viewScreenCollapseClickToCall);

      // mo rong man hinh click to call
      document
        .getElementById("mainCollapseClickToCall")
        .addEventListener("click", () => {
          resizeAppDefault();
          document.getElementById("mainOutbound").style.display = "block";
          document.getElementById("mainCollapseClickToCall").style.display =
            "none";
          document.getElementById("mainContent").style.display = "none";
          document.getElementById("mainBusyCall").style.display = "none";
          document.getElementById("mainListContacts").style.display = "none";
          document.getElementById("mainListHistoryCall").style.display = "none";
          document.getElementById("mainInbound").style.display = "none";
          document.getElementById("mainInboundCollapse").style.display = "none";
          document.getElementById("mainInboundListen").style.display = "none";
          document.getElementById("mainInboundListenCollapse").style.display =
            "none";
        });

      /**End Call **/
      document
        .getElementById("toggleEndCall")
        .addEventListener("click", async () => {
          // await updateTicket(idTicket);
          isMainOutbound = false;
          await insertIdTicketAs7(idTicket);
          client.interface
            .trigger("hide", { id: "softphone" })
            .then(async function () {
              // document.getElementById("mainContent").style.display = "block";
              // document.getElementById("mainOutbound").style.display = "none";
              // document.getElementById("mainBusyCall").style.display = "none";
              // document.getElementById("mainCollapseClickToCall").style.display =
              //   "none";
              // document.getElementById("mainListContacts").style.display =
              //   "none";
              // document.getElementById("mainListHistoryCall").style.display =
              //   "none";
              // document.getElementById("mainInbound").style.display = "none";
              // document.getElementById("mainInboundCollapse").style.display =
              //   "none";
              // document.getElementById("mainInboundListen").style.display =
              //   "none";
              // document.getElementById(
              //   "mainInboundListenCollapse"
              // ).style.display = "none";

              // document.getElementById("output").innerText = "";
              // phoneNumberReceiver = document.getElementById("output").value =
              //   "";
              // document.getElementById("appTextPhone").value = "";
              // document.getElementById("appTextPhone").innerText = "";
              resetText();
              /**as7 backend **/

              let call = webphone.calls[0];
              call.clearConnection();

              console.log("đã gọi vào end call as7");
              /**as7 backend **/
              onAppDeactive();
              // location.reload();
              // ret.innerHTML = "00:00:00";
              // resizeAppDefault();
              // console.info("successfully closed the CTI app");
            })
            .catch(function (error) {
              console.error("Error: Failed to close the CTI app");
              console.error(error);
            });
        });

      document
        .getElementById("toggleEndCallBusy")
        .addEventListener("click", () => {
          client.interface
            .trigger("hide", { id: "softphone" })
            .then(function () {
              isMainOutbound = false;
              document.getElementById("mainContent").style.display = "block";
              document.getElementById("mainOutbound").style.display = "none";
              document.getElementById("mainBusyCall").style.display = "none";

              document.getElementById("mainCollapseClickToCall").style.display =
                "none";
              document.getElementById("mainListContacts").style.display =
                "none";
              document.getElementById("mainListHistoryCall").style.display =
                "none";
              document.getElementById("mainInbound").style.display = "none";
              document.getElementById("mainInboundCollapse").style.display =
                "none";
              document.getElementById("mainInboundListen").style.display =
                "none";
              document.getElementById(
                "mainInboundListenCollapse"
              ).style.display = "none";

              document.getElementById("output").innerText = "";
              phoneNumberReceiver = document.getElementById("output").value =
                "";
              document.getElementById("appTextPhone").value = "";
              document.getElementById("appTextPhone").innerText = "";
              /**as7 backend **/
              let call = webphone.calls[0];
              call.clearConnection();
              /**as7 backend **/
              // ret.innerHTML = "00:00:00";
              resizeAppDefault();
              resetText();
              location.reload();
              // onAppDeactive();

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
          isMainOutbound = false;
          client.interface
            .trigger("hide", { id: "softphone" })
            .then(function () {
              document.getElementById("mainContent").style.display = "block";
              document.getElementById("mainOutbound").style.display = "none";
              document.getElementById("mainBusyCall").style.display = "none";
              document.getElementById("mainCollapseClickToCall").style.display =
                "none";
              document.getElementById("mainListContacts").style.display =
                "none";
              document.getElementById("mainListHistoryCall").style.display =
                "none";
              document.getElementById("mainInbound").style.display = "none";
              document.getElementById("mainInboundCollapse").style.display =
                "none";
              document.getElementById("mainInboundListen").style.display =
                "none";
              document.getElementById(
                "mainInboundListenCollapse"
              ).style.display = "none";

              phoneNumberReceiver = document.getElementById("output").value =
                "";
              document.getElementById("appTextPhone").value = "";
              document.getElementById("appTextPhone").innerText = "";
              /**as7 backend **/
              let call = webphone.calls[0];
              call.clearConnection();
              /**as7 backend **/
              // ret.innerHTML = "00:00:00";
              onAppDeactive();
              location.reload();
              // console.info("successfully closed the CTI app");
            })
            .catch(function (error) {
              console.error("Error: Failed to close the CTI app");
              console.error(error);
            });
        });
      /**End Call **/

      // Xử lý sự kiên liên quan đến Inbound
      // thu gon màn hinh khi btnCollapseClickInBound
      document
        .getElementById("btnCollapseClickInBound")
        .addEventListener("fwClick", viewScreenCollapseClickInBound);

      //thu gọn màn khi agent bắt máy
      document
        .getElementById("btnCollapseInboundListen")
        .addEventListener("fwClick", viewScreeInboundListenCollapse);
      //mở rộng màn hình agent nghe máy
      // document
      //   .getElementById("toggleShowMainInboundListen")
      //   .addEventListener("click", () => {
      //     showMainInboundListen();
      //   });

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
  console.log("da vao checkphone");
  var x = document.getElementById("output");
  // var phoneNumber = /^\d{10}$/;
  if (x.value.includes("+")) {
    console.log("vao co dau + ");
    var phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,5}$/;
    if (x.value.match(phone) && x.value.length == 12) {
      filteredContactSearch(x.value);
      // eventHandlecallDialpad();
      $("#callEnter").attr("disabled", false);
      $("#callEnter").css({ backgroundColor: "green" });
      document.getElementById("appTextPhone1").innerText = "Correct";
      document.getElementById("appTextPhone1").className =
        "correct__number__phone";
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
      console.log("không co dấu + ");
      filteredContactSearch(x.value);
      // eventHandlecallDialpad();
      $("#callEnter").attr("disabled", false);
      $("#callEnter").css({ backgroundColor: "green" });
      document.getElementById("appTextPhone1").innerText = "Correct";
      document.getElementById("appTextPhone1").className =
        "correct__number__phone";
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

function toggleCall() {
  isMainOutbound = true;
  eventHandlecallDialpad();
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
  // $("#callEnter").attr("disabled", false);
  // $("#callEnter").css({ backgroundColor: "green" });
  document.getElementById("appTextPhone1").innerText = "Correct";
  document.getElementById("appTextPhone1").className = "correct__number__phone";
  /**Call tu man hinh dialpad **/
  //   document.getElementById("callEnter").addEventListener("click", () => {
  //  });
  /**Call tu man hinh dialpad **/

  openApp();
  let textElementDialpad = document.getElementById("output").value;
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("mainOutbound").style.display = "block";
  document.getElementById("mainBusyCall").style.display = "none";
  document.getElementById("mainCollapseClickToCall").style.display = "none";
  document.getElementById("mainListContacts").style.display = "none";
  document.getElementById("mainListHistoryCall").style.display = "none";
  document.getElementById("mainInbound").style.display = "none";
  document.getElementById("mainInboundCollapse").style.display = "none";
  document.getElementById("mainInboundListen").style.display = "none";
  document.getElementById("mainInboundListenCollapse").style.display = "none";

  phoneNumberReceiver = textElementDialpad;
  document.getElementById("appTextPhone").value = phoneNumberReceiver;
  document.getElementById("appTextPhone").innerText = phoneNumberReceiver;

  document.getElementById("appTextPhoneBusyCall").value = phoneNumberReceiver;
  document.getElementById("appTextPhoneBusyCall").innerText =
    phoneNumberReceiver;
  //filter contacts

  if (existContact) {
    goToContact(idContact);
  }

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
    onAppDeactive();
    location.reload();
    console.log("call.clearConnection()", call.clearConnection());
  }
  /**end click to call as7*/
}

function showContact() {
  isMainContactActive = true;
  isMainInbound = false;
  isMainOutbound = false;
  isMainActive = false;

  document.getElementById("output").innerText = "";

  document.getElementById("mainListContacts").style.display = "block";
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("mainOutbound").style.display = "none";
  document.getElementById("mainBusyCall").style.display = "none";
  document.getElementById("mainCollapseClickToCall").style.display = "none";
  document.getElementById("mainListHistoryCall").style.display = "none";
  document.getElementById("mainInbound").style.display = "none";
  document.getElementById("mainInboundCollapse").style.display = "none";
  document.getElementById("mainInboundListen").style.display = "none";
  document.getElementById("mainInboundListenCollapse").style.display = "none";

  current_page = 1;
  getContactData(current_page);
}

function renderListContactEmpty() {
  document.getElementById("listContact").innerHTML = "";
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
            attr-user-email = "${contact?.email ? contact?.email : ""}"
            attr-user-id = "${contact?.id ? contact?.id : ""}"
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
    let filteredNames = listContacts.filter((item) =>
      item.name.startsWith(id, 0)
    );
    renderListContact(filteredNames);
    console.log("filteredNames", filteredNames);
  } else if (def === id) {
    document.getElementById("showCharacter").innerText = "";
    renderListContact(listContacts);
  }
}

function clickContactCall(elem) {
  let phone_contact = $(elem).attr("attr-user-phone");
  let name_contact = $(elem).attr("attr-user-contact");
  emailContact = $(elem).attr("attr-user-email");
  idContact = $(elem).attr("attr-user-id");
  nameContact = name_contact;
  isInboundCall = false;
  if (phone_contact !== "null") {
    //show app
    client.interface
      .trigger("show", { id: "softphone" })
      .then(function () {
        resizeAppDefault();
        console.log(`Success: Opened the app`);
        existContact = true;
        document.getElementById("mainOutbound").style.display = "block";
        document.getElementById("mainContent").style.display = "none";
        document.getElementById("mainListContacts").style.display = "none";
        document.getElementById("mainBusyCall").style.display = "none";
        document.getElementById("mainCollapseClickToCall").style.display =
          "none";
        document.getElementById("mainListHistoryCall").style.display = "none";
        document.getElementById("mainInbound").style.display = "none";
        document.getElementById("mainInboundCollapse").style.display = "none";
        document.getElementById("mainInboundListen").style.display = "none";
        document.getElementById("mainInboundListenCollapse").style.display =
          "none";

        document.getElementById("appTxtNameContact").value = name_contact;
        document.getElementById("appTxtNameContact").innerText = name_contact;

        document.getElementById("appTextPhone").value = phone_contact;
        document.getElementById("appTextPhone").innerText = phone_contact;

        phoneNumberReceiver = phone_contact;
        nameContact = name_contact;
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
  isMainContactActive = true;
  console.log("isMainContactActive", isMainContactActive);
  console.log(contactId);
  // isMainActive = true;
  client.interface
    .trigger("click", { id: "contact", value: contactId })
    .then(function (data) {
      // document.getElementById("mainListContacts").style.display = "block";
      console.log("goToContact:", data);
      console.info("successfully navigated to contact");
    })
    .catch(function (error) {
      console.error("Error: Failed to navigate to contact");
      console.error(error);
    });

  // let str = agent_ref;
  // let sindex = agent_ref?.lastIndexOf(".freshdesk.com");
  // console.log("Vị trí của chuỗi toidicode trong des là bao nhieu: " + sindex);
  // let a = str?.slice(0, sindex);
  // const urlParams = a + ".freshdesk.com/a/contacts/" + contactId;
  // window.open(urlParams, "_blank");
}

$(document).ready(function () {
  $(function () {
    $(".scrollpane").scroll(function () {
      var $this = $(this);
      var $results = $("#listContact"); // 1050
      if (
        Math.ceil($this.scrollTop()) + Math.ceil($this.height()) ==
        Math.ceil($results.height())
      ) {
        fetchContactData(current_page);
      }
    });
  });
});

function showHistoryCall() {
  document.getElementById("output").innerText = "";

  document.getElementById("mainListHistoryCall").style.display = "block";
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("mainOutbound").style.display = "none";
  document.getElementById("mainBusyCall").style.display = "none";
  document.getElementById("mainCollapseClickToCall").style.display = "none";
  document.getElementById("mainListContacts").style.display = "none";
  document.getElementById("mainInbound").style.display = "none";
  // document.getElementById("calling__inbound").style.display = "none";
  document.getElementById("mainInboundCollapse").style.display = "none";
  document.getElementById("mainInboundListen").style.display = "none";

  // lấy data historycall
  setTimeout(async () => {
    let readCall = await webphone.readCallDetails(options);
    listHisCall = readCall.reverse();
    renderListHistoryCall(listHisCall);
    console.log("listHisCall", listHisCall);
  });
}

// async function readCallDetailsResponse() {}

function showMain() {
  console.log("goi vao show main");
  // console.log("isMainOutbound", isMainOutbound);
  // console.log("isMainInbound", isMainInbound);
  // console.log("isMainActive", isMainActive);
  // console.log("isMainContactActive", isMainContactActive);
  if (
    isMainContactActive == true &&
    isMainOutbound == false &&
    isMainInbound == false &&
    isMainActive == false
  ) {
    document.getElementById("mainListContacts").style.display = "block";
    document.getElementById("mainContent").style.display = "none";
    document.getElementById("mainOutbound").style.display = "none";
    document.getElementById("mainInbound").style.display = "none";
    document.getElementById("mainInboundListen").style.display = "none";
  }
  if (
    isMainContactActive == false &&
    isMainOutbound == false &&
    isMainInbound == false &&
    isMainActive == false
  ) {
    document.getElementById("mainContent").style.display = "block";
    document.getElementById("mainListContacts").style.display = "none";
    document.getElementById("mainOutbound").style.display = "none";
    document.getElementById("mainInbound").style.display = "none";
    document.getElementById("mainInboundListen").style.display = "none";

    $("#callEnter").attr("disabled", true);
    $("#callEnter").css({ backgroundColor: "darkgray" });
    document.getElementById("appTextPhone1").innerText = "Correct";
    document.getElementById("appTextPhone1").className =
      "correct__number__phone";
    ret.innerHTML = "";
    retCollapse.innerHTML = "";
    retTimerInbound.innerHTML = "";
    retTimerInboundListen.innerHTML = "";
    retTimerInboundListenCollapse.innerHTML = "";

    document.getElementById("timerInboundListen").textContent = "";
    document.getElementById("timerInboundListenCollapse").textContent = "";

    idContact = "";
    nameContact = "";
    phoneNumberReceiver = "";
    isInboundCall = false;
    existContact = false;
    isMainActive = false;
  } else if (
    isMainOutbound == true &&
    isMainContactActive == false &&
    isMainInbound == false &&
    isMainActive == false
  ) {
    document.getElementById("mainOutbound").style.display = "block";
    document.getElementById("mainInbound").style.display = "none";
    document.getElementById("mainContent").style.display = "none";
    document.getElementById("mainListContacts").style.display = "none";
    document.getElementById("mainInboundListen").style.display = "none";
  } else if (
    isMainInbound == true &&
    isMainContactActive == false &&
    isMainOutbound == false &&
    isMainActive == false
  ) {
    document.getElementById("mainInbound").style.display = "block";
    document.getElementById("mainOutbound").style.display = "none";
    document.getElementById("mainContent").style.display = "none";
    document.getElementById("mainListContacts").style.display = "none";
    document.getElementById("mainInboundListen").style.display = "none";
  } else if (
    isMainInbound == false &&
    isMainContactActive == false &&
    isMainOutbound == false &&
    isMainActive == true
  ) {
    document.getElementById("mainInbound").style.display = "none";
    document.getElementById("mainOutbound").style.display = "none";
    document.getElementById("mainContent").style.display = "none";
    document.getElementById("mainListContacts").style.display = "none";
    document.getElementById("mainInboundListen").style.display = "block";
  }

  document.getElementById("mainBusyCall").style.display = "none";
  document.getElementById("mainCollapseClickToCall").style.display = "none";
  document.getElementById("mainListHistoryCall").style.display = "none";
  document.getElementById("mainInboundCollapse").style.display = "none";
  document.getElementById("mainInboundListenCollapse").style.display = "none";
}

$("#search_contact").keypress(function (event) {
  const val = document.querySelector('input[name="search_contact"]').value;
  let keycode = event.keyCode ? event.keyCode : event.which;

  if (keycode == "13" && (val != "" || val != null)) {
    filteredContactSearch(val);
  }
  if (keycode == "13" && (val == "" || val == null)) {
    current_page = 1;
    getContactData(current_page);
  }
  event.stop();
});

//Inbound
function endCallDecline() {
  endCall();
}

// nghe máy từ ngoài gọi vào
async function listenCall() {
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
    let recordedMessage;
    call.recordMessage().then((response) => {
      console.log("goi từ inbound", response);
      recordedMessage = repsonse.resultingMessage;
      console.log("recording started:", recordedMessage);
    });
  } else if (call.localConnectionInfo == "alerting") {
    // //tạo ticket khi tồn tại khách hàng trong hệ thống

    // console.log("isMainActive khi accpet", isMainActive);
    // if (isMainActive) {
    //   console.log("vào đây trước 1 listenCall");
    //   await filterContactDataInbound(phoneNumberReceiver);
    //   if (existContact) {
    //     createTicket();
    //   } else {
    //     createContact();
    //   }
    // }
    // click while we have an alerting call -> accept it
    call.answerCall({ audio: true, video: false });
  } else {
    // otherwise we release the call
    call.clearConnection();
    onAppDeactive();
  }
  /**end click to call as7*/
}

function acceptCall() {
  //view màn inbound khi nghe máy
  document.getElementById("mainInboundListen").style.display = "block";
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("mainOutbound").style.display = "none";
  document.getElementById("mainBusyCall").style.display = "none";
  document.getElementById("mainCollapseClickToCall").style.display = "none";
  document.getElementById("mainListContacts").style.display = "none";
  document.getElementById("mainListHistoryCall").style.display = "none";
  document.getElementById("mainInbound").style.display = "none";
  document.getElementById("mainInboundCollapse").style.display = "none";
  isMainActive = true;
  listenCall();
}

function endCall() {
  let call = webphone.calls[0];
  call.clearConnection();
  stop();
  onAppDeactive();
  location.reload();
}

function endCallInboundListen() {
  let call = webphone.calls[0];
  call.clearConnection();
  location.reload(true);
  stop();
  document.getElementById("mainInboundListen").style.display = "none";
  onAppDeactive();
}
function showMainInboundListen() {
  client.interface
    .trigger("show", { id: "softphone" })
    .then(function () {
      resizeAppDefault();
      console.log("vao day k show man nghe inbound");
      //view màn inbound khi nghe máy
      document.getElementById("mainInboundListen").style.display = "block";
      document.getElementById("mainContent").style.display = "none";
      document.getElementById("mainOutbound").style.display = "none";
      document.getElementById("mainBusyCall").style.display = "none";
      document.getElementById("mainCollapseClickToCall").style.display = "none";
      document.getElementById("mainListContacts").style.display = "none";
      document.getElementById("mainListHistoryCall").style.display = "none";
      document.getElementById("mainInbound").style.display = "none";
      document.getElementById("mainInboundCollapse").style.display = "none";
      isMainActive = true;

      document.getElementById("appTxtNameContactInboundListen").textContent =
        nameContact;

      listenCall();
      document.getElementById("timerInboundListen").textContent =
        retTimerInboundListen.textContent;
    })
    .catch(function (error) {
      console.error("Error: Failed to open the app");
      console.error(error);
    });
}

function viewScreeInboundListenCollapse() {
  isMainCollapse = "mainCollapse";
  client.instance.resize({ height: "48px" });
  document.getElementById("mainInboundListenCollapse").style.display = "block";
  document.getElementById("mainInboundCollapse").style.display = "none";
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("mainOutbound").style.display = "none";
  document.getElementById("mainBusyCall").style.display = "none";
  document.getElementById("mainListContacts").style.display = "none";
  document.getElementById("mainCollapseClickToCall").style.display = "none";
  document.getElementById("mainListHistoryCall").style.display = "none";
  document.getElementById("mainInboundListen").style.display = "none";
  document.getElementById("mainInbound").style.display = "none";
}

function viewMainInbound() {
  isMainInbound = true;
  isMainOutbound = false;
  isMainContactActive = false;

  document.getElementById("mainInbound").style.display = "block";
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("mainOutbound").style.display = "none";
  document.getElementById("mainBusyCall").style.display = "none";
  document.getElementById("mainCollapseClickToCall").style.display = "none";
  document.getElementById("mainListContacts").style.display = "none";
  document.getElementById("mainListHistoryCall").style.display = "none";
  document.getElementById("mainInboundCollapse").style.display = "none";
  document.getElementById("mainInboundListen").style.display = "none";
  document.getElementById("mainInboundListenCollapse").style.display = "none";
}

function btnShowMainInbound() {
  client.interface
    .trigger("show", { id: "softphone" })
    .then(function () {
      resizeAppDefault();
      viewMainInbound();
    })
    .catch(function (error) {
      console.error("Error: Failed to open the app");
      console.error(error);
    });
}

function btShowMainInboundListen() {
  client.interface
    .trigger("show", { id: "softphone" })
    .then(function () {
      resizeAppDefault();
      document.getElementById("mainInboundListen").style.display = "block";
      document.getElementById("mainInboundListenCollapse").style.display =
        "none";
      document.getElementById("mainContent").style.display = "none";
      document.getElementById("mainOutbound").style.display = "none";
      document.getElementById("mainBusyCall").style.display = "none";
      document.getElementById("mainCollapseClickToCall").style.display = "none";
      document.getElementById("mainListContacts").style.display = "none";
      document.getElementById("mainListHistoryCall").style.display = "none";
      document.getElementById("mainInbound").style.display = "none";
      document.getElementById("mainInboundCollapse").style.display = "none";
    })
    .catch(function (error) {
      console.error("Error: Failed to open the app");
      console.error(error);
    });
}

async function createTicket() {
  let _subject = "";
  if (existContact) {
    if (isInboundCall) {
      _subject = "Answered Inbound Call";
    } else {
      _subject = "Served Outbound Call"; // khách hang da co so dien thoai Outbound
    }
  } else {
    if (isInboundCall) {
      _subject = ` Answered Inbound Call - ${phoneNumberReceiver}`;
    } else {
      _subject = `Served Outbound Call - ${phoneNumberReceiver}`;
    }
  }
  console.log("bat dau tao ticket", _subject);
  let ticketDetails = {};
  try {
    if (existContact) {
      ticketDetails = JSON.stringify({
        email: emailContact,
        subject: _subject,
        priority: 1,
        description: `Hey ${
          nameContact ? nameContact : "Unknown Contact"
        } - ${phoneNumberReceiver} 👋, created ticket!`,
        status: 2,
        source: 3, // phone
      });
    } else {
      ticketDetails = JSON.stringify({
        requester_id: idContact,
        subject: _subject,
        priority: 1,
        description: `Hey "Unknown Contact" - ${phoneNumberReceiver} 👋, created ticket!`,
        status: 2,
        source: 3, // phone
      });
    }

    // Send request
    const dataTicket = await client.request.invokeTemplate("createTicket", {
      body: ticketDetails,
    });
    var detail = dataTicket?.response ? JSON.parse(dataTicket?.response) : [];
    idTicket = detail?.id;
    console.info("Successfully created ticket in Freshdesk", detail);
    showNotify(
      "success",
      `Successfully created a ticket: ${idTicket} for: ${nameContact}`
    );

    // client.data.get("loggedInUser").then(function (data) {
    //   let agent_ref = data?.loggedInUser?.availability?.agent_ref
    //     ? data?.loggedInUser?.availability?.agent_ref
    //     : undefined;
    //   const phone = data.loggedInUser.contact.phone
    //     ? data.loggedInUser.contact.phone
    //     : data.loggedInUser.contact.mobile
    //     ? data.loggedInUser.contact.mobile
    //     : null;
    //   window.userPhone = phone;

    //   // let str = agent_ref;
    //   let sindex = agent_ref?.lastIndexOf(".freshdesk.com");
    //   console.log(
    //     "Vị trí của chuỗi toidicode trong des là bao nhieu: " + sindex
    //   );
    //   let a = str?.slice(0, sindex);
    //   const urlParams = a + ".freshdesk.com/a/contacts/" + idContact;
    //   window.open(urlParams, "_blank");
    // });

    // let str = agent_ref;
    // let sindex = agent_ref?.lastIndexOf(".freshdesk.com");
    // console.log("Vị trí của chuỗi toidicode trong des là bao nhieu: " + sindex);
    // let a = str?.slice(0, sindex);
    // const urlParams = a + ".freshdesk.com/a/contacts/" + idContact;
    // window.open(urlParams, "_blank");
    // goToTicket(idTicket);

    //thu nhỏ màn hình call
    if (!isInboundCall) {
      viewScreenCollapseClickToCall();
    } else {
      viewScreeInboundListenCollapse();
    }
    // goToContact(idContact);
    goToTicket(idTicket);
  } catch (error) {
    idContact = "";
    console.error("Error: Failed to create a ticket");
    console.error(error);
    showNotify("danger", "Failed to create a ticket.");
  }
}

async function createContact() {
  try {
    const properties = JSON.stringify({
      name: `${"Unknown Contact"} - ${phoneNumberReceiver}`,
      phone: encodeURIComponent(phoneNumberReceiver),
      email: `unknown_contact${phoneNumberReceiver}@gmail.com`,
    });
    // Send request
    const dataContact = await client.request.invokeTemplate("createContact", {
      body: properties,
    });

    var detail = dataContact?.response ? JSON.parse(dataContact?.response) : [];
    console.log("dataContact thành công:", dataContact?.response);
    if (Object.keys(detail).length > 0) {
      idContact = detail.id;
      createTicket();
    }
  } catch (error) {
    console.error(`Error: Failed to create a contact ${phoneNumberReceiver}`);
    console.error(error);
    showNotify("danger", "Failed to create a contact.");
  }
}

let url_record =
  "https://hcm.fstorage.vn/pbx-stg/PBX_CRM/cr_20231213-140710_f6369b7d658b3a2e_cc2ftistg-aae15c8057620e40.wav?AWSAccessKeyId=ZB3J75FAFEPIBPA8ZBV6&Signature=fG8%2FgGArKMkMtQ4pAML9A7Kg7ww%3D&Expires=1703481977";
async function updateTicket(idTicket) {
  console.log("co chay vao update ticket:", idContact);
  let html = `<div style="font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif; font-size:14px">
    <div dir="ltr">
      <a href="${url_record} rel="noreferrer" target="_blank" heap-ignore="true" class="_ar_hide_"
          _ar_hide_="width:62px;height:19px;margin:0px;position:static;display:inline-block;" style="
          text-decoration: unset; padding: 10px 10px;">
          file record
      </a>
      <br />
      <audio controls preload="auto" style="height: 30px;margin-top: 10px;">
        <source src="${url_record}" />
      </audio>
    </div>
  </div>`;
  try {
    const properties = JSON.stringify({
      attachment_ids: [],
      cloud_files: [],
      requester_id: idContact,
      description: html,
    });
    // Send request
    var dataUpdateTicket = await client.request.invokeTemplate("updateTicket", {
      context: {
        id_ticket: idTicket,
      },
      body: properties,
    });

    var detail = dataUpdateTicket?.response
      ? JSON.parse(dataUpdateTicket?.response)
      : [];
    console.log("dataUpdateTicket thành công:", detail);
    showNotify("success", `Successfully update a ticket for: ${idTicket}`);
  } catch (error) {
    console.error(
      `Error: Failed to update a ticket ${phoneNumberReceiver}-${idTicket}`
    );
    console.error(error);
    showNotify("danger", "Failed to update a ticket.");
  }
}

async function insertIdTicketAs7(idTicket) {
  console.log("co chay vao insertIdTicketAs7:", idTicket);
  try {
    var data = await client.request.invokeTemplate("insertIdTicketAs7", {
      context: {
        // terminalId: 115,
        accountCode: idTicket,
        accountName: idContact,
      },
    });

    var detail = data?.response ? JSON.parse(data?.response) : [];
    console.info("Successfully created insertIdTicketAs7 in Freshdesk", detail);
    console.log("detail insertIdTicketAs7", detail?.pcdr?.id);
  } catch (error) {
    console.error("data insertIdTicketAs7", error);
  }
}

// async function recordS3(data) {
//   console.log("da vao day", data);
//   var detail = data?.response ? JSON.parse(data?.response) : [];
//   console.log("data insertIdTicketAs7", detail);
// }

function showMainDialpad() {
  console.log("goi vao show main dialpad");
  $("#callEnter").attr("disabled", true);
  $("#callEnter").css({ backgroundColor: "darkgray" });
  document.getElementById("output").textContent = "";
  document.getElementById("appTextPhone1").innerText = "Correct";
  document.getElementById("appTextPhone1").className = "correct__number__phone";

  ret.innerHTML = "";
  retCollapse.innerHTML = "";
  retTimerInbound.innerHTML = "";
  retTimerInboundListen.innerHTML = "";
  retTimerInboundListenCollapse.innerHTML = "";

  document.getElementById("timerInboundListen").textContent = "";
  document.getElementById("timerInboundListenCollapse").textContent = "";

  document.getElementById("mainContent").style.display = "block";
  document.getElementById("mainListContacts").style.display = "none";

  document.getElementById("mainOutbound").style.display = "none";
  document.getElementById("mainBusyCall").style.display = "none";
  document.getElementById("mainCollapseClickToCall").style.display = "none";

  document.getElementById("mainListHistoryCall").style.display = "none";
  document.getElementById("mainInbound").style.display = "none";
  document.getElementById("mainInboundCollapse").style.display = "none";
  document.getElementById("mainInboundListen").style.display = "none";
  document.getElementById("mainInboundListenCollapse").style.display = "none";

  idContact = "";
  nameContact = "";
  phoneNumberReceiver = "";
  emailContact = "";

  isInboundCall = false;
  existContact = false;
  isMainActive = false;
  isMainContactActive = false;
  isMainOutbound = false;
}

function renderListHistoryCall(listHisCall) {
  document.getElementById("listHistoryCall").innerHTML = listHisCall
    .map((item) => {
      return `<li>
      <div class="histrory">
        <div class="comments-list">
            <div class="media flex-his">
              <div class="flex-his">
                <div class="media-left" href="#">
                  <img src="./images/icon_profile.png" class="">
                </div>
                <div class="pull-right">
                  <h4 class="text-title"><a class="text-title" href="#">${
                    item?.calling ? item?.calling : item?.called
                  }</a></h4>
                  <p>
                    <span>${renderIconHistoryCall(item)}</span>
                    <span style="margin-left: 6px;">${dateFormat(
                      item?.time
                    )}</span>
                  </p>
                </div>
              </div>
              <div class="his-body" style="text-align: right;">
                <a class="media-heading user_name" onclick=""><img src="./images/icon-info.png"></a>
                <p><small>${
                  item?.duration ? durationFormat(item?.duration) : "--:--"
                } </small></p>
              </div>
            </div>
          </div>
        </div>
    </li>`;
    })
    .join("");
}

function dateFormat(timeStamp) {
  let dateFormat = new Date(timeStamp);
  return (dateFormat =
    dateFormat.getDate() +
    "/" +
    (dateFormat.getMonth() + 1) +
    "/" +
    dateFormat.getFullYear() +
    " " +
    dateFormat.getHours() +
    ":" +
    dateFormat.getMinutes() +
    ":" +
    dateFormat.getSeconds());
}

function durationFormat(duration) {
  const timestamp = duration;
  let dateFormat = new Date(timestamp);
  return (dateFormat =
    dateFormat.getHours() +
    ":" +
    dateFormat.getMinutes() +
    ":" +
    dateFormat.getSeconds());
}

function renderIconHistoryCall(item) {
  if (item.hasOwnProperty("called") && item.hasOwnProperty("duration")) {
    return '<img src="./images/icon_call_out.png">';
  }
  if (item.hasOwnProperty("called")) {
    return '<img src="./images/icon_call_out.png">';
  }
  if (item.hasOwnProperty("calling") && item.hasOwnProperty("duration")) {
    return '<img src="./images/icon_call_in.png">';
  }
  if (item.hasOwnProperty("calling")) {
    return '<img src="./images/icon_miss_call.png">';
  }
}
