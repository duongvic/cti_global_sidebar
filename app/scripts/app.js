let username = "";
let password = "";
let sip = "";

let actionEndCall = false;
let idTicket = null;
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
let listMissCall = [];

let isLoading = false;

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

let appTxtService = "";
let email_acct = undefined;
let role_acct = undefined;
let agent_ref = undefined;
let isMainActive = false;
let isMainContactActive = false;

let isMainShow = "";
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

//----Refactor 2 ---
// Function to toggle mic and hold/unhold states
function toggleState(x, input, updateCallConfig, holdOrRetrieveCall) {
  x.classList.toggle(updateCallConfig ? "mic" : "change");
  input.value = input.value === "false" ? "true" : "false";
  let call = webphone.calls[0];

  if (updateCallConfig) {
    call.updateCall({ audio: input.value === "true" ? "false" : "true" });
  } else {
    input.value === "true" ? call.holdCall() : call.retrieveCall();
  }

  clearAllIntervals();
  isUpdateCallAs7 = true;
}

// Clear all intervals
function clearAllIntervals() {
  clearInterval(interval);
  clearInterval(intervalOutCollapse);
  clearInterval(intervalInbound);
  clearInterval(intervalInboundListenCollapse);
}

// Mic toggle functions
function mic(x) {
  toggleState(x, document.testMic.savereportMic, true, false);
}

function micInbound(x) {
  toggleState(x, document.testMicInbound.savereportMicInbound, true, false);
}

// Hold/Unhold toggle functions
function change(x) {
  toggleState(x, document.testHold_Unhold.savereportHold_Unhold, false, true);
}

function changeInbound(x) {
  toggleState(
    x,
    document.testInboundHold_Unhold.savereportInbound_Hold_Unhold,
    false,
    true
  );
}

// Timer utility functions
function convertSec(cnt) {
  let sec = cnt % 60;
  let min = Math.floor(cnt / 60);
  return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
}

// Timer control functions
function startTimer(elementId, counterRef) {
  return setInterval(() => {
    document.getElementById(elementId).textContent = convertSec(counterRef++);
  }, 1000);
}

// Timer start functions
function start() {
  interval = startTimer("timer", counter);
}

function startTimeCollapse() {
  intervalOutCollapse = startTimer("timerCollapse", counter_time_collapse);
}

function startTimeInbound() {
  intervalInbound = startTimer("timerInboundListen", counter_time_inbound);
}

function startTimeInboundListenCollapse() {
  intervalInboundListenCollapse = startTimer(
    "timerInboundListenCollapse",
    counter_time_inbound_listen_collapse
  );
}

// Stop all timers and clear content
function stop() {
  [
    "timer",
    "timerCollapse",
    "timerInboundListen",
    "nameNotListen",
    "timerInboundListenCollapse",
    "timerInbound",
  ].forEach((id) => {
    document.getElementById(id).textContent = "";
  });
  clearAllIntervals();
}

// Counter variables
let counter = 0;
let counter_time_collapse = 0;
let counter_time_inbound = 0;
let counter_time_inbound_listen_collapse = 0;

// Interval variables
let interval,
  intervalOutCollapse,
  intervalInbound,
  intervalInboundListenCollapse;

//----Refactor 2 ---

// Event handler for call events
agent.on("call", async (event) => {
  try {
    if (isBusyCause(event)) {
      handleBusyCall(event);
      return;
    }

    const call = event.call;
    const localConnectionInfo = call.localConnectionInfo;

    switch (localConnectionInfo) {
      case "alerting":
        await handleInboundAlertingCall(call);
        break;
      case "connected":
        handleConnectedCall(call);
        break;
      case "fail":
        console.log(`Call failed, cause: ${event.content.cause}`);
        break;
      case "hold":
        console.log(`Holding call to ${call.number}`);
        isUpdateCallAs7 = true;
        break;
      case "null":
        handleCallEnded(call);
        break;
      default:
        console.log("Unhandled call state:", localConnectionInfo);
    }
  } catch (error) {
    isInboundCall = false;
    console.error("Error: Failed to handle call event");
    console.error(error);
  }
});

// Check if the call is busy
function isBusyCause(event) {
  return event?.content?.cause === "busy";
}

// Handle busy call scenario
function handleBusyCall(event) {
  console.log("Call is busy:", event?.content?.cause);
  isMainShow = "busycall";
  const phoneNumber = phoneNumberReceiver;
  const contactName = nameContact || phoneNumberReceiver;

  updateAppText("appTextPhoneBusyCall", phoneNumber);
  updateAppText("appTxtNameContactBusyCall", contactName, { color: "#3b3b3b" });

  resizeAppDefault();
  viewMainBusy();
}

// Handle inbound call in alerting state
async function handleInboundAlertingCall(call) {
  console.log(`Inbound call from ${call.number} ${call.name}`);
  console.log("Alerting");
  isInboundCall = true;

  await showSoftphone();

  const userData = await getUserData();
  const phone = userData?.contact?.phone || userData?.contact?.mobile || null;

  window.userPhone = phone;

  await filteredContactSearch(call?.number);

  updateAppText("appTextPhoneInbound", call?.number);
  updateAppText("appTextPhoneInboundListen", call?.number);
  phoneNumberReceiver = call?.number;

  if (existContact) {
    goToContact(idContact);
  }

  resizeAppDefault();
  viewMainInbound();
}

// Handle connected call
function handleConnectedCall(call) {
  console.log(`Connected to ${call.number}`);
  console.log("Connected to screen:", isMainActive);

  if (!isInboundCall) {
    start();
    startTimeCollapse();

    if (!isUpdateCallAs7) {
      existContact ? createTicket() : createContact();
    }
  }

  if (isMainActive && isInboundCall) {
    startTimeInbound();
    startTimeInboundListenCollapse();

    if (!isUpdateCallAs7) {
      existContact ? createTicket() : createContact();
    }
  } else if (!isMainActive && !isInboundCall) {
    clearInterval(intervalInbound);
  }
}

// Handle call ended
function handleCallEnded(call) {
  console.log(`Call to ${call.number} has ended.`);
  console.log("Is main show:", isMainShow);
  console.log("Ticket ID after end:", idTicket);
  console.log("Contact ID after end:", idContact);

  if (idTicket != null && !actionEndCall) {
    insertIdTicketAs7(idTicket);
  }
  stop();
  if (isMainShow !== "busycall") {
    document.getElementById("mainContent").style.display = "block";
    document.getElementById("mainOutbound").style.display = "none";
    resetText();
    onAppDeactive();
    // location.reload();
  }
}

// Utility function to update app text content
function updateAppText(elementId, textContent, style = {}) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = textContent;
    Object.assign(element.style, style);
  }
}

// Utility function to show softphone
async function showSoftphone() {
  await client.interface.trigger("show", { id: "softphone" });
}

// Utility function to get user data
async function getUserData() {
  const userData = await client.data.get("loggedInUser");
  return userData?.loggedInUser || {};
}

function viewMainBusy() {
  document.getElementById("mainBusyCall").style.display = "block";
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("mainOutbound").style.display = "none";
  document.getElementById("mainCollapseClickToCall").style.display = "none";
  document.getElementById("mainListContacts").style.display = "none";
  document.getElementById("mainListHistoryCall").style.display = "none";
  document.getElementById("mainInbound").style.display = "none";
  document.getElementById("mainInboundCollapse").style.display = "none";
  document.getElementById("mainInboundListen").style.display = "none";
  document.getElementById("mainInboundListenCollapse").style.display = "none";
}
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
  // Clear text fields and innerText properties
  const textFields = [
    "appTxtNameContact",
    "appTextPhone",
    "appTxtNameContactBusyCall",
    "appTextPhoneBusyCall",
    "output",
  ];
  textFields.forEach((id) => {
    document.getElementById(id).value = "";
    document.getElementById(id).innerText = "";
  });

  // Reset call button state
  $("#callEnter").attr("disabled", true).css("background-color", "darkgray");

  // Clear timer and nameNotListen elements
  document.getElementById("timer").textContent = "";
  document.getElementById("timerCollapse").textContent = "";
  document.getElementById("nameNotListen").textContent = "";

  // Clear inbound listen timers
  document.getElementById("timerInboundListen").textContent = "";
  document.getElementById("timerInboundListenCollapse").textContent = "";

  stop();

  function stop() {
    [
      "timer",
      "timerCollapse",
      "timerInboundListen",
      "nameNotListen",
      "timerInboundListenCollapse",
      "timerInbound",
    ].forEach((id) => {
      document.getElementById(id).textContent = "";
    });
    clearAllIntervals();
  }
  // Reset call and contact variables
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

  // Reset call history and missed call lists
  listMissCall = [];
  listHisCall = [];

  // Clear local storage cache
  localStorage.removeItem("cacheDataHisCall");
  localStorage.removeItem("cacheDataMissCall");
  localStorage.removeItem("cacheDataContact");
}
/**
 * To close the CTI app
 */
function closeApp() {
  client.interface
    .trigger("hide", { id: "softphone" })
    .then(function () {
      resizeAppDefault();
      // resetText();
      // location.reload(); // thử nhơ mở lại
    })
    .catch(function (error) {
      console.error("Error: Failed to close the CTI app");
      console.error(error);
    });
}

function transformerItems(listItem) {
  const items = {
    data: listItem,
  };
  const transformedItems = {
    data: items.data.reduce((result, currentItem) => {
      const firstLetter = currentItem.name.charAt(0).toUpperCase();
      const existingGroup = result.find(
        (group) => group.letter === firstLetter
      );

      if (existingGroup) {
        existingGroup.group.push(currentItem);
      } else {
        result.push({
          letter: firstLetter,
          group: [currentItem],
        });
      }

      return result;
    }, []),
  };

  const resultData = { data: [] };
  const letterMap = {};

  // Iterate through the input array
  transformedItems.data.forEach((item) => {
    const letter = item.letter;
    const group = item.group;

    if (letterMap[letter]) {
      // If the letter already exists, merge the groups
      letterMap[letter].group = letterMap[letter].group.concat(group);
    } else {
      // If the letter doesn't exist, add a new entry to the result array and the map
      letterMap[letter] = { letter, group };
      resultData.data.push(letterMap[letter]);
    }
  });
  return resultData;
}

async function getContactData(page) {
  document.getElementById("loadingImg").style.display = "block";
  document.getElementById("loadMoreTxt").style.display = "none";
  try {
    var data = await client.request.invokeTemplate("getContacts", {
      context: {
        page: page ? page : 1,
      },
    });
    var arr = data?.response ? JSON.parse(data?.response) : [];
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
      // listContacts = [...arr];

      const response = await Promise.all(
        arr.map(async function (itm) {
          const { id } = itm;
          const profiles = await getContactById(id);
          return { ...itm, profiles };
        })
      );

      listContacts = [...response];
      const transformedItems = transformerItems(listContacts);
      localStorage.setItem("cacheDataContact", JSON.stringify(listContacts));

      renderListContact(transformedItems?.data ? transformedItems?.data : []);
    } else {
      let newData = JSON.parse(localStorage.getItem("cacheDataContact"));
      listContacts = [...newData, ...arr];
      localStorage.setItem("cacheDataContact", JSON.stringify(listContacts));
      current_page = page;
      const transformedItems = transformerItems(listContacts);
      renderListContact(transformedItems?.data ? transformedItems?.data : []);
      // renderListContact(listContacts);
    }
    document.getElementById("loadingImg").style.display = "none";
    document.getElementById("loadMoreTxt").style.display = "block";
  } catch (error) {
    // Failure operation
    console.log(error);
  }
}

async function fetchContactData(page) {
  if (page == 1) {
    current_page = 2;
  } else if (page > 1) {
    current_page = page;
  }
  console.log("page", page);
  document.getElementById("loadingImg").style.display = "block";
  document.getElementById("loadMoreTxt").style.display = "none";
  try {
    var data = await client.request.invokeTemplate("getContacts", {
      context: {
        page: current_page ? current_page : 1,
      },
    });
    var arr = data?.response ? JSON.parse(data?.response) : [];
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
      // var newData = [...arr];
      const response = await Promise.all(
        arr.map(async function (itm) {
          const { id } = itm;
          const profiles = await getContactById(id);
          return { ...itm, profiles };
        })
      );

      var newData = [...response];

      console.log("newData", newData);

      let oldData = JSON.parse(localStorage.getItem("cacheDataContact"));

      if (oldData != null && oldData.length > 0) {
        listContacts = [...oldData, ...newData];
      } else {
        listContacts = [...newData];
      }
      console.log("listContacts", listContacts);
      localStorage.setItem("cacheDataContact", JSON.stringify(listContacts));
      const transformedItems = transformerItems(listContacts);
      current_page = current_page + 1;
      isLoading = false;
      renderListContact(transformedItems?.data ? transformedItems?.data : []);
      document.getElementById("loadingImg").style.display = "none";
      document.getElementById("loadMoreTxt").style.display = "block";
    } else {
      let newData = JSON.parse(localStorage.getItem("cacheDataContact"));
      listContacts = [...newData];
      localStorage.setItem("cacheDataContact", JSON.stringify(listContacts));
      current_page = page;
      const transformedItems = transformerItems(listContacts);
      isLoading = false;
      renderListContact(transformedItems?.data ? transformedItems?.data : []);
      document.getElementById("loadingImg").style.display = "none";
      document.getElementById("loadMoreTxt").style.display = "none";
      // renderListContact(listContacts);
    }
  } catch (error) {
    console.log(error);
    isLoading = false;
    document.getElementById("loadingImg").style.display = "none";
    document.getElementById("loadMoreTxt").style.display = "block";
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
  } catch (error) {
    existContact = false;
    console.log(error);
  }
}

//---- refactor filteredContactSearch---//
async function filteredContactSearch(term) {
  try {
    const data = await client.request.invokeTemplate("filteredContactSearch", {
      context: { term },
    });

    const detail = data?.response ? JSON.parse(data?.response) : [];
    const filteredDataMobile = detail.filter((item) => item.mobile === term);
    const filteredDataPhone = detail.filter((item) => item.phone === term);
    const matchedContact =
      filteredDataMobile.length > 0
        ? filteredDataMobile[0]
        : filteredDataPhone[0];

    if (matchedContact) {
      handleContactFound(matchedContact, detail);
    } else {
      handleContactNotFound();
    }
  } catch (error) {
    existContact = false;
    console.log(error);
  }
}

function handleContactFound(contact, detail) {
  existContact = true;
  idContact = contact.id;
  nameContact = contact.name;

  const contactElements = [
    "appTxtNameContactInbound",
    "appTxtNameContactInboundListen",
    "appTxtNameContact",
  ];

  contactElements.forEach((elementId) => {
    document.getElementById(elementId).textContent = contact.name;
  });

  const phoneElements = ["appTextPhoneInbound", "appTextPhoneInboundListen"];

  phoneElements.forEach((elementId) => {
    document.getElementById(elementId).style.fontSize = "14px";
    document.getElementById(elementId).style.padding = "0px 0px";
  });

  getContactById(contact.id);
  goToContact(idContact);

  const transformedItems = transformerItems(detail);
  renderListContact(transformedItems?.data || []);
}

function handleContactNotFound() {
  existContact = false;
  document.getElementById("appTextPhone").style.fontSize = "20px";
  document.getElementById("appTextPhone").style.padding = "10px 0px";
  nameContact = "";
  current_page = 1;
  renderListContactEmpty();
}
//---- refactor filteredContactSearch---//

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
    return detail;
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

    goToContact(data?.id);

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
  document.getElementById("mainListMissCall").style.display = "none";
  document.getElementById("mainInbound").style.display = "none";
  document.getElementById("mainInboundCollapse").style.display = "none";
  document.getElementById("mainInboundListen").style.display = "none";
  document.getElementById("mainInboundListenCollapse").style.display = "none";
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
  document.getElementById("mainListMissCall").style.display = "none";
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
  openApp();
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

      role_acct = data?.loggedInUser?.type
        ? data?.loggedInUser?.type
        : undefined;
      email_acct = data?.loggedInUser?.contact?.email
        ? data?.loggedInUser?.contact?.email
        : undefined;
      //Getting all iparams
      client.iparams.get().then(function (data) {
        console.log("iparams:", data);
      });

      var displayEmailLogin = document.getElementById("displayValueEmailLogin");
      // Thiết lập giá trị cho thẻ <p>
      displayEmailLogin.textContent = email_acct;

      // lay thong tin extend gọi
      var displayRoleAcct = document.getElementById("roleAcct");
      // Thiết lập giá trị cho thẻ <input>
      displayRoleAcct.value =
        role_acct === "support_agent" ? "Support Agent" : role_acct;
      displayRoleAcct.innerText =
        role_acct === "support_agent" ? "Support Agent" : role_acct;
      displayValueRoleAcct =
        role_acct === "support_agent" ? "Support Agent" : role_acct;
      // var roleDataSource = [
      //   {
      //     value: role_acct,
      //     text: role_acct === "support_agent" ? "Support Agent" : role_acct,
      //   },
      // ];

      // var roleOptionSelect = document.getElementById("roleAcct");
      // roleOptionSelect.options = iconDataSource;
      // roleOptionSelect.setSelectedOptions(roleDataSource);

      var extDataSource = [
        {
          value: "1100",
          text: "EXT 1100",
          // subText: "Pirate King",
          // graphicsProps: { name: "verified" },
        },
        {
          value: "1991",
          text: "EXT 1991",
          // subText: "Best Swordsman",
          // graphicsProps: { name: "magic-wand" },
        },
        {
          value: "1992",
          text: "EXT 1992",
          // subText: "Best Chef",
          // graphicsProps: { name: "ecommerce" },
        },
        {
          value: "1993",
          text: "EXT 1993",
          // subText: "Best Chef",
          // graphicsProps: { name: "ecommerce" },
        },
        {
          value: "1994",
          text: "EXT 1994",
          // subText: "Best Chef",
          // graphicsProps: { name: "ecommerce" },
        },
      ];
      var iconVariant = document.getElementById("complexSelect");
      iconVariant.options = extDataSource;

      // lay thong tin extend gọi
      var appTxtServiceValue = "SST-QC05";

      iconVariant.addEventListener("fwChange", (e) => {
        // Thiết lập giá trị cho thẻ <input>
        displayValueExtension.value = e?.detail?.value;
        displayValueExtension.innerText = e?.detail?.value;
        //thiết lâp giá trị extension
        displayExtension = e?.detail?.value;

        //thiet lập giá trị thẻ <span>

        appTxtService = appTxtServiceValue + " . " + e?.detail?.value;

        $("#btnConnect").attr("disabled", false);
        console.log(e?.detail);
      });

      var statusDataSource = [
        {
          value: "ready",
          text: "Status_Ready",
        },
        {
          value: "lunch",
          text: "Status_Lunch",
        },
        {
          value: "messages",
          text: "Status_Messages",
        },
        {
          value: "wrapUp",
          text: "Status_WrapUp",
        },
        {
          value: "pause",
          text: "Status_Pause",
        },
        {
          value: "logOff",
          text: "Status_LogOff",
        },
      ];

      var statusOptionSelect = document.getElementById("statusAcct");
      statusOptionSelect.options = statusDataSource;
      statusOptionSelect.setSelectedOptions([
        {
          value: "ready",
          text: "Status_Ready",
        },
      ]);

      var displayValueStatusAcct = document.getElementById(
        "displayValueStatusAcct"
      );

      statusOptionSelect.addEventListener("fwChange", (e) => {
        displayValueStatusAcct.textContent = capitalizeFirstLetter(
          e?.detail?.value
        );
        console.log(e?.detail);
      });
      // document
      //   .getElementById("btnConnect")
      //   .addEventListener("fwClick", showSoftphoneConnect());

      // document
      //   .getElementById("btnGoToOncallCX")
      //   .addEventListener("fwClick", goToOncallCX());
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

      document
        .getElementById("btnCloseHisMissCall")
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
          document.getElementById("mainListMissCall").style.display = "none";
          document.getElementById("mainListHistoryCall").style.display = "none";
          document.getElementById("mainInbound").style.display = "none";
          document.getElementById("mainInboundCollapse").style.display = "none";
          document.getElementById("mainInboundListen").style.display = "none";
          document.getElementById("mainInboundListenCollapse").style.display =
            "none";
        });

      /**End Call **/
      // document
      //   .getElementById("toggleEndCall")
      //   .addEventListener("click", async () => {
      //   });

      // ------ ----
      // document
      //   .getElementById("toggleEndCallCollapse")
      //   .addEventListener("click", async () => {
      //   });

      document
        .getElementById("toggleEndCallBusy")
        .addEventListener("click", () => {
          resizeAppDefault();
          client.interface
            .trigger("hide", { id: "softphone" })
            .then(function () {
              isMainOutbound = false;
              $("#callEnter").attr("disabled", true);
              $("#callEnter").css({ backgroundColor: "darkgray" });
              document.getElementById("mainContent").style.display = "block";
              document.getElementById("mainOutbound").style.display = "none";
              document.getElementById("mainBusyCall").style.display = "none";

              document.getElementById("mainCollapseClickToCall").style.display =
                "none";
              document.getElementById("mainListContacts").style.display =
                "none";
              document.getElementById("mainListHistoryCall").style.display =
                "none";
              document.getElementById("mainListMissCall").style.display =
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
              if (call != undefined) {
                call.clearConnection();
              }
              /**as7 backend **/
              onAppDeactive();
              // location.reload();
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

//---- Handle checkPhone ----//
function checkPhone() {
  var x = document.getElementById("output").value.trim();
  var isValid = false;

  if (x.includes("+")) {
    isValid = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,5}$/.test(
      x
    );
  } else {
    isValid = /^\d{10}$/.test(x);
  }

  if (isValid && (x.length === 10 || x.length === 12)) {
    filteredContactSearch(x);
    enableCallButton();
    updatePhoneStatus("Correct", "correct__number__phone");
  } else {
    disableCallButton();
    if (x.length === 0) {
      updatePhoneStatus("Correct", "correct__number__phone");
    } else {
      updatePhoneStatus(
        "Incorrect phone number format",
        "error__number__phone"
      );
    }
    return false;
  }
}

function enableCallButton() {
  $("#callEnter").attr("disabled", false).css({ backgroundColor: "green" });
}

function disableCallButton() {
  $("#callEnter").attr("disabled", true).css({ backgroundColor: "darkgray" });
}

function updatePhoneStatus(message, className) {
  var appTextPhone1 = document.getElementById("appTextPhone1");
  if (appTextPhone1) {
    appTextPhone1.innerText = message;
    appTextPhone1.className = className;
  }
}
//---- Handle checkPhone ----//

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
  document.getElementById("mainListMissCall").style.display = "none";
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

//---refactor renderListContact ---//
function renderListContact(listContacts) {
  const listContactElement = document.getElementById("listContact");
  listContactElement.innerHTML = listContacts.map(renderContact).join("");
}

function renderContact(contact) {
  return `
    <li>
      <div><p class="lb__character">${contact?.letter}</p></div>
      ${contact?.group?.map(renderGroupItem).join("")}
    </li>
  `;
}

function renderGroupItem(item) {
  const avatarUrl =
    item?.profiles?.avatar?.avatar_url ?? "./images/icon_profile.png";
  const userPhone = item?.mobile ?? item?.phone;
  const userName = item?.name ?? "unknown";
  const userEmail = item?.email ?? "";
  const userId = item?.id ?? "";

  return `
    <div class="histrory-call" style="padding-left: 10px;padding-right: 10px;">
      <div class="comments-list">
        <div class="media flex-his">
          <div class="flex-his">
            <div class="media-left">
              <img src="${avatarUrl}" class="avatar-his-call">
            </div>
            <div class="pull-right">
              <fw-tooltip>
                <a class="text-title-his-call" href="#" 
                  attr-user-phone="${userPhone}" 
                  attr-user-contact="${userName}" 
                  attr-user-email="${userEmail}"
                  attr-user-id="${userId}"
                  onclick="clickContactCall(this)">
                  ${item?.name}
                </a>
                <div slot="tooltip-content">Click to call</div>
              </fw-tooltip>
              <p><span id="userPhoneContact">${userPhone}</span></p>
            </div>
          </div>
          <div class="his-body" style="text-align: right;" attr-id-contact="${userId}" onclick="redirectContactInfo(this)">
            <fw-tooltip>
              <img src="./images/icon-info.png">
              <div slot="tooltip-content">Chi tiết liên hệ</div>
            </fw-tooltip>
          </div>
        </div>
      </div>
    </div>
  `;
}
//---renderListContact---//

function enableCharacterContact(elem) {
  let def = document.getElementById("valueShowCharacter").value;
  let id = $(elem).attr("id");

  if (def === "default" || (def !== id && def !== "")) {
    document.getElementById("valueShowCharacter").value = id;
    // let filteredNames = listContacts.filter((item) =>
    //   item.name.startsWith(id, 0)
    // );
    const transformedItems = transformerItems(listContacts);
    const filteredNames = transformedItems?.data?.filter(
      (item) => item?.letter == id
    );
    document.getElementById("showCharacter").innerText =
      filteredNames.length > 0 ? "" : id;

    document.getElementById("showCharacter").style.display =
      filteredNames.length > 0 ? "none" : "block";

    renderListContact(filteredNames);
  } else if (def === id) {
    document.getElementById("showCharacter").innerText = "";
    document.getElementById("showCharacter").style.display = "none";
    const transformedItems = transformerItems(listContacts);
    renderListContact(transformedItems?.data);
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
        if (existContact) {
          goToContact(idContact);
        }
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

function loadMoreItemsContact() {
  if (!isLoading) {
    isLoading = true;

    fetchContactData(current_page);
  } else {
    isLoading = false;
    let data = JSON.parse(localStorage.getItem("cacheDataContact"));
    renderListContact(data);
  }
}

$(document).ready(function () {
  $(function () {
    // $(".scrollpane").scroll(function () {
    //   var $this = $(this);
    //   var $results = $("#listContact"); // 1050
    //   // console.log("$this.scrollTop()", $this.scrollTop());
    //   // console.log("$this.height()", $this.height());
    //   // console.log("$results.height()", $results.height());
    //   const halfwayPoint = Math.ceil($results.height() / 2);
    //   if (!isLoading && Math.ceil($this.scrollTop()) > halfwayPoint) {
    //     isLoading = true;
    //     fetchContactData(current_page);
    //   }
    //   // if (
    //   //   Math.ceil($this.scrollTop()) + Math.ceil($this.height()) ==
    //   //   Math.ceil($results.height())
    //   // ) {
    //   //   currentPage++;
    //   //   fetchContactData(current_page);
    //   // }
    // });
    // $(".scrollpane-his-call").scroll(function () {
    //   var $this = $(this);
    //   var $resultsMisCall = $("#listHisMissCall");
    //   if (
    //     Math.ceil($this.scrollTop()) + Math.ceil($this.height()) ==
    //     Math.ceil($resultsMisCall.height())
    //   ) {
    //     loadMoreItems();
    //   }
    // });
  });
});

async function showHistoryCall() {
  listMissCall = [];
  listHisCall = [];

  document.getElementById("output").innerText = "";
  document.getElementById("mainListHistoryCall").style.display = "block";
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("mainOutbound").style.display = "none";
  document.getElementById("mainBusyCall").style.display = "none";
  document.getElementById("mainCollapseClickToCall").style.display = "none";
  document.getElementById("mainListContacts").style.display = "none";
  document.getElementById("mainListMissCall").style.display = "none";
  document.getElementById("mainInbound").style.display = "none";
  document.getElementById("mainInboundCollapse").style.display = "none";
  document.getElementById("mainInboundListen").style.display = "none";

  const dataCached = JSON.parse(localStorage.getItem("cacheDataHisCall"));
  // lấy data historycall
  // setTimeout(async () => {
  let readCall = await webphone.readCallDetails(options);
  listHisCall = readCall.reverse();
  if (
    dataCached != null &&
    dataCached.length > 0 &&
    listHisCall.length == dataCached.length
  ) {
    renderListHistoryCall(dataCached);
  } else {
    await displayItemsHisCall(getItemsForCurrentPageHisCall());
  }

  console.log("listHisCall", listHisCall);
  // });
}

async function showMissCall() {
  listMissCall = [];
  listHisCall = [];

  document.getElementById("output").innerText = "";
  document.getElementById("mainListMissCall").style.display = "block";
  document.getElementById("mainListHistoryCall").style.display = "none";
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("mainOutbound").style.display = "none";
  document.getElementById("mainBusyCall").style.display = "none";
  document.getElementById("mainCollapseClickToCall").style.display = "none";
  document.getElementById("mainListContacts").style.display = "none";
  document.getElementById("mainInbound").style.display = "none";
  document.getElementById("mainInboundCollapse").style.display = "none";
  document.getElementById("mainInboundListen").style.display = "none";

  const dataCached = JSON.parse(localStorage.getItem("cacheDataMissCall"));
  // setTimeout(async () => {
  let readCall = await webphone.readCallDetails(options);
  const arr = readCall.reverse();
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].hasOwnProperty("calling") &&
      arr[i].hasOwnProperty("duration") == false
    ) {
      listMissCall.push(arr[i]);
    }
  }
  if (
    dataCached != null &&
    dataCached.length > 0 &&
    listMissCall.length == dataCached.length
  ) {
    renderListMissCall(dataCached);
  } else {
    // Khởi tạo trang với dữ liệu ban đầu
    await displayItems(getItemsForCurrentPage());
  }

  console.log("renderListMissCall", listMissCall);
  // });
}

const ITEMS_PER_PAGE = 10;
let currentPage = 1;

// Hàm lấy phần tử cho trang hiện tại
function getItemsForCurrentPage() {
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  return listMissCall.slice(startIndex, startIndex + ITEMS_PER_PAGE);
}

// Hàm xử lý sự kiện khi nhấn "Load More"
async function loadMoreItems() {
  currentPage++;
  const newItems = getItemsForCurrentPage();

  // Hiển thị các phần tử mới này trên giao diện
  // displayItems(newItems);
  const response = await Promise.all(
    newItems.map(async function (itm) {
      const { calling } = itm;
      const profiles = await getDetailContact(calling);
      return { ...itm, profiles };
    })
  );
  let itemsOld = JSON.parse(localStorage.getItem("cacheDataMissCall"));
  let arrayOfArrays = [...itemsOld, response];
  const flattenedArray = [].concat(...arrayOfArrays);
  localStorage.setItem("cacheDataMissCall", JSON.stringify(flattenedArray));
  renderListMissCall(flattenedArray);
}

// Hàm để hiển thị các phần tử lên giao diện
async function displayItems(items) {
  const response = await Promise.all(
    items.map(async function (itm) {
      const { calling } = itm;
      const profiles = await getDetailContact(calling);
      return { ...itm, profiles };
    })
  );
  localStorage.setItem("cacheDataMissCall", JSON.stringify(response));
  renderListMissCall(response);
}

function showMain() {
  // Hide all elements by default
  document.getElementById("mainListContacts").style.display = "none";
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("mainOutbound").style.display = "none";
  document.getElementById("mainInbound").style.display = "none";
  document.getElementById("mainInboundListen").style.display = "none";

  // Show the appropriate element based on the active state
  if (isMainContactActive) {
    document.getElementById("mainListContacts").style.display = "block";
  } else if (isMainOutbound) {
    document.getElementById("mainOutbound").style.display = "block";
  } else if (isMainInbound) {
    document.getElementById("mainInbound").style.display = "block";
  } else if (isMainActive) {
    document.getElementById("mainInboundListen").style.display = "block";
  } else {
    // Handle default state
    document.getElementById("mainContent").style.display = "block";

    // Update UI elements
    $("#callEnter").attr("disabled", true);
    $("#callEnter").css({ backgroundColor: "darkgray" });
    document.getElementById("appTextPhone1").innerText = "Correct";
    document.getElementById("appTextPhone1").className =
      "correct__number__phone";

    stop();

    document.getElementById("timerInboundListen").textContent = "";
    document.getElementById("timerInboundListenCollapse").textContent = "";

    idContact = "";
    nameContact = "";
    phoneNumberReceiver = "";
    isInboundCall = false;
    existContact = false;
    isMainActive = false;
  }

  // Hide other elements
  document.getElementById("mainBusyCall").style.display = "none";
  document.getElementById("mainCollapseClickToCall").style.display = "none";
  document.getElementById("mainListHistoryCall").style.display = "none";
  document.getElementById("mainInboundCollapse").style.display = "none";
  document.getElementById("mainInboundListenCollapse").style.display = "none";
}

$("#search_contact").keypress(function (event) {
  const val = document.querySelector('input[name="search_contact"]').value;
  let keycode = event.keyCode ? event.keyCode : event.which;
  const phone12 = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,5}$/;
  const phone = /^\d{10}$/;
  if (keycode == "13" && (val != "" || val != null)) {
    if (val.match(phone) || val.match(phone12)) {
      filteredContactSearch(val);
    } else {
      searchContactKeyword(val);
    }
  } else if (keycode == "13" && (val == "" || val == null)) {
    current_page = 1;
    getContactData(current_page);
  }
});

async function searchContactKeyword(term) {
  try {
    const data = await client.request.invokeTemplate("filteredContactSearch", {
      context: {
        term: term,
      },
    });
    let detail = data?.response ? JSON.parse(data?.response) : [];
    if (detail?.length > 0) {
      existContact = true;
      const transformedItems = transformerItems(detail);
      return renderListContact(
        transformedItems?.data ? transformedItems?.data : []
      );
    } else {
      existContact = false;
      nameContact = "";
      current_page = 1;
      renderListContactEmpty;
    }
  } catch (error) {
    existContact = false;
    console.log(error);
  }
}
//Inbound
function endCallDecline() {
  endCall();
  location.reload();
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
  document.getElementById("mainListMissCall").style.display = "none";
  document.getElementById("mainInbound").style.display = "none";
  document.getElementById("mainInboundCollapse").style.display = "none";
  isMainActive = true;
  listenCall();
}

function endCall() {
  let call = webphone.calls[0];
  if (call != undefined) {
    call.clearConnection();
  }
  location.reload(true);
  stop();
  document.getElementById("mainInboundCollapse").style.display = "none";
  document.getElementById("mainInbound").style.display = "none";
  document.getElementById("mainCollapseClickToCall").style.display = "none";
  document.getElementById("mainInboundCollapse").style.display = "none";
  actionEndCall = false;
  onAppDeactive();
}

function endCallInboundListen() {
  let call = webphone.calls[0];
  if (call != undefined) {
    call.clearConnection();
  }
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
      document.getElementById("mainListMissCall").style.display = "none";
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
  document.getElementById("mainListMissCall").style.display = "none";
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
  document.getElementById("mainListMissCall").style.display = "none";
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
      document.getElementById("mainListMissCall").style.display = "none";
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
      name: `${"Unknown Contact"}-${phoneNumberReceiver}`,
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
  debugger;
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

  stop();

  document.getElementById("timerInboundListen").textContent = "";
  document.getElementById("timerInboundListenCollapse").textContent = "";

  document.getElementById("mainContent").style.display = "block";
  document.getElementById("mainListContacts").style.display = "none";

  document.getElementById("mainOutbound").style.display = "none";
  document.getElementById("mainBusyCall").style.display = "none";
  document.getElementById("mainCollapseClickToCall").style.display = "none";

  document.getElementById("mainListHistoryCall").style.display = "none";
  document.getElementById("mainListMissCall").style.display = "none";
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
      <div class="histrory-call" style="padding-left: 10px;padding-right: 10px;">
        <div class="comments-list">
            <div class="media flex-his">
              <div class="flex-his">
                <div class="media-left" href="#">
                  <img src="${
                    item?.profiles != undefined &&
                    item?.profiles?.avatar != null
                      ? item?.profiles?.avatar
                      : "./images/icon_profile.png"
                  }" 
                    class="avatar-his-call" style="">
                </div>
                <div class="pull-right">
                  ${renderTextHistoryCall(item)}
                  <p>
                    <span>${renderIconHistoryCall(item)}</span>
                    <span class="his-call-txt-time">${dateFormat(
                      item?.time
                    )}</span>
                  </p>
                </div>
              </div>
              <div class="his-body" style="text-align: right;" 
                attr-sdt-inf="${item?.calling ? item.calling : item?.called}"
                onclick="redirectContactInfoMissCall(this)"
              >
              <fw-tooltip>
                <img src="./images/icon-info.png">
                <div slot="tooltip-content">
                  Chi tiết liên hệ
                </div>
              </fw-tooltip>
                <p class="his-call-txt-time" style="margin-top: 14px; line-height: 13px;">${
                  item?.duration ? durationFormat(item?.duration) : "--:--"
                }</p>
              </div>
            </div>
          </div>
        </div>
    </li>`;
    })
    .join("");
}

function dateFormat(timeStamp) {
  const date = new Date(timeStamp);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

function durationFormat(duration) {
  let seconds = Math.floor(duration / 1000);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const hourString = String(hours).padStart(2, "0");
  const minuteString = String(minutes).padStart(2, "0");
  const secondString = String(remainingSeconds).padStart(2, "0");

  if (hours > 0) {
    return `${hourString}:${minuteString}:${secondString}`;
  } else if (minutes > 0) {
    return `${minuteString}:${secondString}`;
  } else {
    return `00:${secondString}`;
  }
}

function renderIconHistoryCall(item) {
  const hasCalled = item.hasOwnProperty("called");
  const hasCalling = item.hasOwnProperty("calling");
  const hasDuration = item.hasOwnProperty("duration");

  if (hasCalled) {
    return hasDuration
      ? '<img src="./images/icon_call_out.png">'
      : '<img src="./images/icon_call_out.png">';
  }

  if (hasCalling) {
    return hasDuration
      ? '<img src="./images/icon_call_in.png">'
      : '<img src="./images/icon_miss_call.png">';
  }
}

function renderTextHistoryCall(item) {
  const renderTooltip = (contact, style = "") => {
    const name = item?.profiles?.name || contact;
    return `<fw-tooltip>
              <a class="text-title-his-call" href="#" style="${style}" attr-sdt="${contact}" onclick="clickToMissCall(this)">
                ${name}
              </a>
              <div slot="tooltip-content">
                Click to call
              </div>
            </fw-tooltip>`;
  };

  if (item.hasOwnProperty("called")) {
    return renderTooltip(item.called);
  }

  if (item.hasOwnProperty("calling")) {
    const style = item.hasOwnProperty("duration") ? "" : "color: red;";
    return renderTooltip(item.calling, style);
  }

  return "";
}

function renderListMissCall(arrListCall) {
  const listContainer = document.getElementById("listHisMissCall");
  const listItems = arrListCall
    .map((item) => {
      const avatarSrc = item?.profiles?.avatar || "./images/icon_profile.png";
      const displayName = item?.profiles?.name || item?.calling;
      const callTime = dateFormat(item?.time);
      const callingAttr = item?.calling;

      return `
      <li>
        <div class="history-call" style="padding: 0 10px;">
          <div class="comments-list">
            <div class="media flex-his">
              <div class="flex-his">
                <div class="media-left">
                  <img src="${avatarSrc}" class="avatar-his-call">
                </div>
                <div class="pull-right">
                  <h4 class="text-title-his-call">
                    <fw-tooltip>
                      <a href="#" style="color: red;" attr-sdt="${callingAttr}" onclick="clickToMissCall(this)">
                        ${displayName}
                      </a>
                      <div slot="tooltip-content">
                        Click to call
                      </div>
                    </fw-tooltip>
                  </h4>
                  <p>
                    <span><img src="./images/icon_miss_call.png"></span>
                    <span>${callTime}</span>
                  </p>
                </div>
              </div>
              <div class="his-body" style="text-align: right;" attr-sdt-inf="${callingAttr}" onclick="redirectContactInfoMissCall(this)">
                <fw-tooltip>
                  <img src="./images/icon-info.png">
                  <div slot="tooltip-content">
                    Chi tiết liên hệ
                  </div>
                </fw-tooltip>
                <p style="margin-top: 14px; line-height: 13px;">--:--</p>
              </div>
            </div>
          </div>
        </div>
      </li>`;
    })
    .join("");

  listContainer.innerHTML = listItems;
}

function clickToMissCall(elem) {
  isMainOutbound = true;
  isInboundCall = false;
  isMainShow == "miss_call";
  let sdt = $(elem).attr("attr-sdt");
  filteredContactSearch(sdt);
  resizeAppDefault();
  document.getElementById("mainOutbound").style.display = "block";
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("mainListContacts").style.display = "none";
  document.getElementById("mainBusyCall").style.display = "none";
  document.getElementById("mainCollapseClickToCall").style.display = "none";
  document.getElementById("mainListHistoryCall").style.display = "none";
  document.getElementById("mainListMissCall").style.display = "none";
  document.getElementById("mainInbound").style.display = "none";
  document.getElementById("mainInboundCollapse").style.display = "none";
  document.getElementById("mainInboundListen").style.display = "none";
  document.getElementById("mainInboundListenCollapse").style.display = "none";
  document.getElementById("appTxtNameContact").value = nameContact;
  document.getElementById("appTxtNameContact").innerText = nameContact;

  document.getElementById("appTextPhone").value = sdt;
  document.getElementById("appTextPhone").innerText = sdt;
  phoneNumberReceiver = sdt;

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
}

function redirectContactInfoMissCall(elem) {
  let sdt = $(elem).attr("attr-sdt-inf");
  isMainShow = "miss_call";
  filteredContactSearch(sdt);
}

async function getDetailContact(term) {
  try {
    const result = await client.request.invokeTemplate(
      "filteredContactSearch",
      {
        context: {
          term: term,
        },
      }
    );
    if (result?.status == 200) {
      let detail = result?.response ? JSON.parse(result?.response) : [];
      if (detail.length > 0) {
        return detail[0];
      }
      return undefined;
    }
  } catch (error) {}
}

const ITEMS_PER_PAGE_HIS_CALL = 10;
let currentPageHisCall = 1;

// Hàm lấy phần tử cho trang hiện tại
function getItemsForCurrentPageHisCall() {
  const startIndex = (currentPageHisCall - 1) * ITEMS_PER_PAGE_HIS_CALL;
  return listHisCall.slice(startIndex, startIndex + ITEMS_PER_PAGE_HIS_CALL);
}

// Hàm xử lý sự kiện khi nhấn "Load More"
async function loadMoreItemsHisCall() {
  currentPageHisCall++;
  const newItems = getItemsForCurrentPageHisCall();
  // Hiển thị các phần tử mới này trên giao diện
  // displayItemsHisCall(newItems);
  const response = await Promise.all(
    newItems.map(async function (itm) {
      const { calling, called } = itm;
      const profiles = await getDetailContact(calling ? calling : called);
      return { ...itm, profiles };
    })
  );
  let itemsOld = JSON.parse(localStorage.getItem("cacheDataHisCall"));
  let arrayOfArrays = [...itemsOld, response];
  const flattenedArray = [].concat(...arrayOfArrays);
  localStorage.setItem("cacheDataHisCall", JSON.stringify(flattenedArray));
  renderListHistoryCall(flattenedArray);
}

// Hàm để hiển thị các phần tử lên giao diện
async function displayItemsHisCall(items) {
  const response = await Promise.all(
    items.map(async function (itm) {
      const { calling, called } = itm;
      const profiles = await getDetailContact(calling ? calling : called);
      return { ...itm, profiles };
    })
  );
  localStorage.setItem("cacheDataHisCall", JSON.stringify(response));
  renderListHistoryCall(response);
}

function openCity(nameMainView) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(nameMainView).style.display = "block";
}

function preCall() {
  const phone_again = document.getElementById("appTextPhoneBusyCall").value;
  phoneNumberReceiver = phone_again;
  openCity("mainOutbound");

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
}

async function toggleEndCallCollapse() {
  actionEndCall = true;
  isMainOutbound = false;
  await insertIdTicketAs7(idTicket);
  resizeAppDefault();
  client.interface
    .trigger("hide", { id: "softphone" })
    .then(function () {
      document.getElementById("mainContent").style.display = "block";
      document.getElementById("mainOutbound").style.display = "none";
      document.getElementById("mainBusyCall").style.display = "none";
      document.getElementById("mainCollapseClickToCall").style.display = "none";
      document.getElementById("mainListContacts").style.display = "none";
      document.getElementById("mainListHistoryCall").style.display = "none";
      document.getElementById("mainListMissCall").style.display = "none";
      document.getElementById("mainInbound").style.display = "none";
      document.getElementById("mainInboundCollapse").style.display = "none";
      document.getElementById("mainInboundListen").style.display = "none";
      document.getElementById("mainInboundListenCollapse").style.display =
        "none";
      phoneNumberReceiver = document.getElementById("output").value = "";
      document.getElementById("appTextPhone").value = "";
      document.getElementById("appTextPhone").innerText = "";
      endCall();
    })
    .catch(function (error) {
      console.error("Error: Failed to close the CTI app");
      console.error(error);
    });
}

async function toggleEndCall() {
  // await updateTicket(idTicket);
  actionEndCall = true;
  isMainOutbound = false;
  if (idTicket != null) {
    await insertIdTicketAs7(idTicket);
  }
  client.interface
    .trigger("hide", { id: "softphone" })
    .then(async function () {
      resetText();
      endCall();
    })
    .catch(function (error) {
      console.error("Error: Failed to close the CTI app");
      console.error(error);
    });
}

async function showSoftphoneConnect() {
  document.getElementById("viewConnecting").style.display = "none";
  document.getElementById("displayConnect").style.display = "block";

  // Thiết lập giá trị cho thẻ <p>
  var showValueRole = document.getElementById("displayValueRoleAcct");
  showValueRole.textContent = displayValueRoleAcct;

  var showValueExtension = document.getElementById("displayValueExtension");
  showValueExtension.textContent = displayExtension;
}

async function goToOncallCX() {
  document.getElementById("mainConnect").style.display = "none";
  document.getElementById("mainContent").style.display = "block";

  var showValueAppTxtService = document.querySelector(".appTxtService");
  showValueAppTxtService.innerText = appTxtService;
  const label = document.querySelector(".appTxtService");
  label.textContent = appTxtService; // U

  console.log("label.textContent", label.textContent);
}

function capitalizeFirstLetter(string) {
  return string
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

document.querySelector(".appTxtService").addEventListener("click", function () {
  const dropdown = document.querySelector(".dropdown--extend");
  const label = document.querySelector(".appTxtService");
  label.style.display = "none"; // Hide the label when clicked
  dropdown.style.display = "block"; // Show the dropdown
});

document
  .querySelector(".dropdown--extend")
  .addEventListener("change", function () {
    const dropdown = document.querySelector(".dropdown--extend");
    const selectedOption = dropdown.options[dropdown.selectedIndex].text;
    const label = document.querySelector(".appTxtService");
    label.textContent = `SST-QC05 . ${selectedOption}`; // Update the label text
    label.style.display = "inline"; // Show the label with the new text
    dropdown.style.display = "none"; // Hide the dropdown after selection
  });

document
  .querySelector(".dropdown--extend")
  .addEventListener("mouseleave", function () {
    const dropdown = document.querySelector(".dropdown--extend");
    const label = document.querySelector(".appTxtService");
    label.style.display = "inline"; // Show the label with the initial text
    dropdown.style.display = "none"; // Hide the dropdown when mouse leaves
  });
