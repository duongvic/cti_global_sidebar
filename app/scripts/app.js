const secretKey = "pYgBQnwbHvhTc6HD89";
const CryptoJS = window.CryptoJS;

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

let displayExtension = "";
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

agent.startApplicationSession({
  // username: "duongnh4@fpt.com",
  // password: "DuongNH4!!!",
  username: "anntp2@fpt.com",
  password: "nfcAm%HL7v",
});
agent.on("applicationsessionstarted", () => {
  // webphone = agent.getDevice("sip:1073@term.133");
  webphone = agent.getDevice("sip:1217@term.498");
  // webphone = agent.getDevice("sip:1217@term.492");
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
async function setUpdateCallAs7(value) {
  isUpdateCallAs7 = value;
}
// Function to toggle mic and hold/unhold states
async function toggleState(x, input, updateCallConfig, holdOrRetrieveCall) {
  x.classList.toggle(updateCallConfig ? "mic" : "change");
  input.value = input.value === "false" ? "true" : "false";
  let call = webphone.calls[0];

  if (updateCallConfig) {
    call.updateCall({ audio: input.value === "true" ? "false" : "true" });
  } else {
    input.value === "true" ? call.holdCall() : call.retrieveCall();
  }

  clearAllIntervals();
  await setUpdateCallAs7(true);
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

    await handleLocalConnectionInfo(event);
  } catch (error) {
    isInboundCall = false;
    console.error("Error: Failed to handle call event");
    console.error(error);
  }
});

async function handleLocalConnectionInfo(event) {
  const call = event.call;
  const localConnectionInfo = call.localConnectionInfo;

  switch (localConnectionInfo) {
    case "alerting":
      await handleInboundAlertingCall(call);
      break;
    case "connected":
      await handleConnectedCall(call);
      break;
    case "fail":
      handleCallFail(event);
      break;
    case "hold":
      await handleCallHold(call);
      break;
    case "null":
      handleCallEnded(call);
      break;
    default:
      console.log("Unhandled call state:", localConnectionInfo);
  }
}

function handleCallFail(event) {
  console.log(`Call failed, cause: ${event.content.cause}`);
}

async function handleCallHold(call) {
  console.log(`Holding call to ${call.number}`);
  await setUpdateCallAs7(true);
}

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
async function handleConnectedCall(call) {
  console.log(`Connected to ${call.number}`);
  console.log("Connected to screen:", isMainActive);

  if (!isInboundCall) {
    start();
    startTimeCollapse();

    if (!isUpdateCallAs7) {
      await (existContact ? createTicket() : createContact());
      await setUpdateCallAs7(true);
    }
  }

  if (isMainActive && isInboundCall) {
    startTimeInbound();
    startTimeInboundListenCollapse();

    if (!isUpdateCallAs7) {
      await (existContact ? createTicket() : createContact());
      await setUpdateCallAs7(true);
    }
  } else if (!isMainActive && !isInboundCall) {
    clearInterval(intervalInbound);
  }
}

// Handle call ended
async function handleCallEnded(call) {
  debugger;
  console.log(`Call to ${call.number} has ended.`);
  console.log("Is main show:", isMainShow);

  console.log("actionEndCall after end:", actionEndCall);
  if (idTicket != null && actionEndCall !== true) {
    insertIdTicketAs7(idTicket);
  }
  stop();
  if (isMainShow !== "busycall") {
    $("#headCourse").css("display", "block");
    $("#mainContent").css("display", "block");
    $("#mainOutbound").css("display", "none");
    $("#mainCollapseClickToCall").css("display", "none");

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
  $("#appTxtServiceBusyCall").text(appTxtService);

  $("#mainBusyCall").css("display", "block");
  $("#mainContent").css("display", "none");
  $("#mainOutbound").css("display", "none");
  $("#mainCollapseClickToCall").css("display", "none");
  $("#mainListContacts").css("display", "none");
  $("#mainListHistoryCall").css("display", "none");
  $("#mainInbound").css("display", "none");
  $("#mainInboundCollapse").css("display", "none");
  $("#mainInboundListen").css("display", "none");
  $("#mainInboundListenCollapse").css("display", "none");
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
// function getLoggedInUser() {
//   client.data.get("loggedInUser").then(
//     function (data) {
//       console.info("Successfully got loggedInUser data");
//       showNotify("info", `User's name: ${data.loggedInUser.contact.name}`);
//     },
//     function (error) {
//       console.error("Error: Failed to get the loggedInUser information");
//       console.error(error);
//     }
//   );
// }

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
  actionEndCall = false;
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
  isMainShow = "";
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
  $("#loadingImg").css("display", "block");
  $("#loadMoreTxt").css("display", "none");

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

    $("#loadingImg").css("display", "none");
    $("#loadMoreTxt").css("display", "block");
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
  $("#loadingImg").css("display", "block");
  $("#loadMoreTxt").css("display", "none");

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

      $("#loadingImg").css("display", "none");
      $("#loadMoreTxt").css("display", "none");

      // renderListContact(listContacts);
    }
  } catch (error) {
    console.log(error);
    isLoading = false;
    $("#loadingImg").css("display", "none");
    $("#loadMoreTxt").css("display", "block");
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
      $("#appTxtNameContactInbound").val(detail[0].name);
      $("#appTxtNameContactInbound").text(detail[0].name);
      $("#appTxtNameContactInboundListen").val(detail[0].name);
      $("#appTxtNameContactInboundListen").text(detail[0].name);

      phoneNumberReceiver = phone;
      nameContact = detail[0].name;
      emailContact = detail[0].email;
      idContact = detail[0].id;
    } else {
      existContact = false;
      $("#appTextPhoneInbound").css({
        fontSize: "22px",
        padding: "10px 0px",
      });

      $("#appTextPhoneInboundListen").css({
        fontSize: "22px",
        padding: "9px 0px",
      });

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
    $("#" + elementId).text(contact.name);
  });

  const phoneElements = ["appTextPhoneInbound", "appTextPhoneInboundListen"];

  phoneElements.forEach((elementId) => {
    $("#" + elementId).css({
      fontSize: "14px",
      padding: "0px 0px",
    });
  });

  getContactById(contact.id);
  goToContact(idContact);

  const email_contact = emailContact;
  console.log("email_contact contact", email_contact);
  const transformedItems = transformerItems(detail);
  renderListContact(transformedItems?.data || []);
}

function handleContactNotFound() {
  existContact = false;
  $("#appTextPhone").css({
    fontSize: "20px",
    padding: "10px 0px",
  });

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
      $("#appTxtNameContact").text(nameContact);

      avtarContact = detail?.avatar?.avatar_url;
      document.getElementById("avatarContact").src = avtarContact;
    } else {
      existContact = false;
      nameContact = "";
      emailContact = "";
      $("#appTextPhone").css({
        fontSize: "20px",
        padding: "10px 0px",
      });
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

    $("#mainCourse").css("display", "block");
    $("#headCourse").css("display", "none");
    $("#mainOutbound").css("display", "block");

    $("#mainConnect").css("display", "none");
    $("#mainContent").css("display", "none");
    $("#mainBusyCall").css("display", "none");
    $("#mainCollapseClickToCall").css("display", "none");
    $("#mainListContacts").css("display", "none");
    $("#mainListHistoryCall").css("display", "none");
    $("#mainInbound").css("display", "none");
    $("#mainInboundCollapse").css("display", "none");
    $("#mainInboundListen").css("display", "none");
    $("#mainInboundListenCollapse").css("display", "none");

    $("#appTxtServiceOutbound").text(appTxtService);

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
  $(
    "#mainContent, #mainOutbound, #mainBusyCall, #mainListContacts, #mainListHistoryCall, #mainListMissCall, #mainInbound, #mainInboundCollapse, #mainInboundListen, #mainInboundListenCollapse"
  ).hide();
  $("#mainCollapseClickToCall").show();
}

function viewScreenCollapseClickInBound() {
  client.instance.resize({ height: "48px" });
  $("#mainInboundCollapse").show();
  $(
    "#mainContent, #mainOutbound, #mainBusyCall, #mainCollapseClickToCall, #mainListContacts, #mainListHistoryCall, #mainListMissCall, #mainInbound, #mainInboundListen, #mainInboundListenCollapse"
  ).hide();

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
  // openApp();
  client.data.get("loggedInUser").then(
    async function (data) {
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

      const iparams = await getIparamsFreshdesk();
      const nameDomain = await getDomainName();

      var data = {
        nameDomain: "uservisitor89.freshdesk.com",
        email: "user.visitor.89@gmail.com",
        passPPX: "nfcAm%HL7v",
      };
      // Encrypt
      var ciphertext = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        "secret key 123"
      ).toString();
      console.log("ciphertext message: ", ciphertext);

      // Decrypt
      var bytes = CryptoJS.AES.decrypt(ciphertext, "secret key 123");
      var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

      console.log("Decrypted data: ", decryptedData);

      var displayEmailLogin = $("#displayValueEmailLogin");
      // Thiết lập giá trị cho thẻ <p>
      displayEmailLogin.text(email_acct);

      // lay thong tin extend gọi
      var displayRoleAcct = $("#roleAcct");
      // Thiết lập giá trị cho thẻ <input>
      displayRoleAcct.val(
        role_acct === "support_agent" ? "Support Agent" : role_acct
      );

      displayRoleAcct.text(
        role_acct === "support_agent" ? "Support Agent" : role_acct
      );

      // var roleDataSource = [
      //   {
      //     value: role_acct,
      //     text: role_acct === "support_agent" ? "Support Agent" : role_acct,
      //   },
      // ];

      // var roleOptionSelect = document.getElementById("roleAcct");
      // roleOptionSelect.options = iconDataSource;
      // roleOptionSelect.setSelectedOptions(roleDataSource);

      var iconVariant = document.getElementById("complexSelect");
      iconVariant.options = extDataSource;

      // lay thong tin extend gọi
      var appTxtServiceValue = "SST-QC05";

      iconVariant.addEventListener("fwChange", (e) => {
        // Thiết lập giá trị cho thẻ <input>
        // displayValueExtension.value = e?.detail?.value;
        // displayValueExtension.innerText = e?.detail?.value;
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

      current_page = 1;

      // addEventListeners();
      /* Adding event handlers for all the buttons in the UI of the app */

      const btnClose = document.getElementById("btnClose");
      if (btnClose) {
        btnClose.addEventListener("fwClick", closeApp);
      }

      const btnClose1 = document.getElementById("btnClose1");
      if (btnClose1) {
        btnClose1.addEventListener("fwClick", closeApp);
      }

      const btnCloseHistoryCall = document.getElementById(
        "btnCloseHistoryCall"
      );
      if (btnCloseHistoryCall) {
        btnCloseHistoryCall.addEventListener("fwClick", closeApp);
      }

      const btnCloseHisMissCall = document.getElementById(
        "btnCloseHisMissCall"
      );
      if (btnCloseHisMissCall) {
        btnCloseHisMissCall.addEventListener("fwClick", closeApp);
      }
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
      // document.getElementById("appTextPhone1").innerText = "Correct";
      // document.getElementById("appTextPhone1").className =
      //   "correct__number__phone";

      // thu nhỏ màn hinh khi callbtnCollapseClickToCall
      const btnCollapseClickToCall = document.getElementById(
        "btnCollapseClickToCall"
      );
      if (btnCollapseClickToCall) {
        btnCollapseClickToCall.addEventListener(
          "fwClick",
          viewScreenCollapseClickToCall
        );
      }
      // document
      //   .getElementById("btnCollapseClickToCall")
      //   .addEventListener("fwClick", viewScreenCollapseClickToCall);

      // mo rong man hinh click to call
      document
        .getElementById("mainCollapseClickToCall")
        .addEventListener("click", () => {
          resizeAppDefault();
          $("#mainOutbound").css("display", "block");
          $("#mainCollapseClickToCall").css("display", "none");
          $("#mainContent").css("display", "none");
          $("#mainBusyCall").css("display", "none");
          $("#mainListContacts").css("display", "none");
          $("#mainListMissCall").css("display", "none");
          $("#mainListHistoryCall").css("display", "none");
          $("#mainInbound").css("display", "none");
          $("#mainInboundCollapse").css("display", "none");
          $("#mainInboundListen").css("display", "none");
          $("#mainInboundListenCollapse").css("display", "none");
        });

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

              $("#headCourse").css("display", "block");

              $("#mainContent").css("display", "block");
              $("#mainOutbound").css("display", "none");
              $("#mainBusyCall").css("display", "none");

              $("#mainCollapseClickToCall").css("display", "none");
              $("#mainListContacts").css("display", "none");
              $("#mainListHistoryCall").css("display", "none");
              $("#mainListMissCall").css("display", "none");
              $("#mainInbound").css("display", "none");
              $("#mainInboundCollapse").css("display", "none");
              $("#mainInboundListen").css("display", "none");
              $("#mainInboundListenCollapse").css("display", "none");

              $("#output").text("");
              phoneNumberReceiver = $("#output").val("");
              $("#appTextPhone").val("");
              $("#appTextPhone").text("");

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
  openApp();

  $("#headCourse").css("display", "none");
  $("#mainContent").hide();
  $("#mainOutbound").show();
  $("#mainBusyCall").hide();
  $("#mainCollapseClickToCall").hide();
  $("#mainListContacts").hide();
  $("#mainListHistoryCall").hide();
  $("#mainInbound").hide();
  $("#mainInboundCollapse").hide();
  $("#mainInboundListen").hide();
  $("#mainInboundListenCollapse").hide();

  // Gán giá trị đó cho thẻ span
  $("#appTxtServiceOutbound").text(appTxtService);

  let textElementDialpad = $("#output").val();
  phoneNumberReceiver = textElementDialpad;
  $("#appTextPhone1").text("Correct").attr("class", "correct__number__phone");
  $("#appTextPhone").val(phoneNumberReceiver).text(phoneNumberReceiver);
  $("#appTextPhoneBusyCall").val(phoneNumberReceiver).text(phoneNumberReceiver);

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

  var newSvgContact = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.8594 14.0161C17.6094 13.3599 17.4844 12.688 17.4844 12.0005C17.4844 11.313 17.6094 10.6411 17.8594 9.98486H19.5L21 8.01611L19.0313 6.00049C18.4688 6.43799 17.9063 7.04736 17.3438 7.82861C16.8125 8.60986 16.4531 9.32861 16.2656 9.98486C16.0781 10.6411 15.9844 11.313 15.9844 12.0005C15.9844 12.688 16.0781 13.3599 16.2656 14.0161C16.4531 14.6724 16.8125 15.3911 17.3438 16.1724C17.9063 16.9536 18.4688 17.563 19.0313 18.0005L21 15.9849L19.5 14.0161H17.8594ZM14.0156 18.0005V17.0161C14.0156 16.1099 13.3281 15.3755 11.9531 14.813C10.5781 14.2192 9.26563 13.9224 8.01563 13.9224C6.76563 13.9224 5.45313 14.2192 4.07813 14.813C2.70313 15.3755 2.01563 16.1099 2.01563 17.0161V18.0005H14.0156ZM10.125 6.89111C9.53125 6.29736 8.82813 6.00049 8.01563 6.00049C7.20313 6.00049 6.5 6.29736 5.90625 6.89111C5.3125 7.48486 5.01563 8.18799 5.01563 9.00049C5.01563 9.81299 5.3125 10.5161 5.90625 11.1099C6.5 11.7036 7.20313 12.0005 8.01563 12.0005C8.82813 12.0005 9.53125 11.7036 10.125 11.1099C10.7188 10.5161 11.0156 9.81299 11.0156 9.00049C11.0156 8.18799 10.7188 7.48486 10.125 6.89111ZM21.9844 3.00049C22.5156 3.00049 22.9844 3.20361 23.3906 3.60986C23.7969 4.01611 24 4.48486 24 5.01611V18.9849C24 19.5161 23.7969 19.9849 23.3906 20.3911C22.9844 20.7974 22.5156 21.0005 21.9844 21.0005H2.01563C1.48438 21.0005 1.01563 20.7974 0.609375 20.3911C0.203125 19.9849 0 19.5161 0 18.9849V5.01611C0 4.48486 0.203125 4.01611 0.609375 3.60986C1.01563 3.20361 1.48438 3.00049 2.01563 3.00049H21.9844Z" fill="white"></path>
</svg>`;
  $("#btnContact").html(newSvgContact);

  var oldSvgDialap = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.4211 0.66383C10.8772 0.221277 11.4035 0 12 0C12.5965 0 13.1228 0.221277 13.5789 0.66383C14.0351 1.10638 14.2632 1.61702 14.2632 2.19574C14.2632 2.77447 14.0351 3.28511 13.5789 3.72766C13.1228 4.17021 12.5965 4.39149 12 4.39149C11.4035 4.39149 10.8772 4.17021 10.4211 3.72766C9.96491 3.28511 9.73684 2.77447 9.73684 2.19574C9.73684 1.61702 9.96491 1.10638 10.4211 0.66383ZM10.4211 7.2C10.8772 6.75745 11.4035 6.53617 12 6.53617C12.5965 6.53617 13.1228 6.75745 13.5789 7.2C14.0351 7.64255 14.2632 8.15319 14.2632 8.73191C14.2632 9.31064 14.0351 9.82128 13.5789 10.2638C13.1228 10.7064 12.5965 10.9277 12 10.9277C11.4035 10.9277 10.8772 10.7064 10.4211 10.2638C9.96491 9.82128 9.73684 9.31064 9.73684 8.73191C9.73684 8.15319 9.96491 7.64255 10.4211 7.2ZM17.1579 7.2C17.614 6.75745 18.1404 6.53617 18.7368 6.53617C19.3333 6.53617 19.8596 6.75745 20.3158 7.2C20.7719 7.64255 21 8.15319 21 8.73191C21 9.31064 20.7719 9.82128 20.3158 10.2638C19.8596 10.7064 19.3333 10.9277 18.7368 10.9277C18.1404 10.9277 17.614 10.7064 17.1579 10.2638C16.7018 9.82128 16.4737 9.31064 16.4737 8.73191C16.4737 8.15319 16.7018 7.64255 17.1579 7.2ZM17.1579 13.7362C17.614 13.2936 18.1404 13.0723 18.7368 13.0723C19.3333 13.0723 19.8596 13.2936 20.3158 13.7362C20.7719 14.1787 21 14.6894 21 15.2681C21 15.8468 20.7719 16.3574 20.3158 16.8C19.8596 17.2426 19.3333 17.4638 18.7368 17.4638C18.1404 17.4638 17.614 17.2426 17.1579 16.8C16.7018 16.3574 16.4737 15.8468 16.4737 15.2681C16.4737 14.6894 16.7018 14.1787 17.1579 13.7362ZM10.4211 13.7362C10.8772 13.2936 11.4035 13.0723 12 13.0723C12.5965 13.0723 13.1228 13.2936 13.5789 13.7362C14.0351 14.1787 14.2632 14.6894 14.2632 15.2681C14.2632 15.8468 14.0351 16.3574 13.5789 16.8C13.1228 17.2426 12.5965 17.4638 12 17.4638C11.4035 17.4638 10.8772 17.2426 10.4211 16.8C9.96491 16.3574 9.73684 15.8468 9.73684 15.2681C9.73684 14.6894 9.96491 14.1787 10.4211 13.7362ZM20.3158 3.72766C19.8596 4.17021 19.3333 4.39149 18.7368 4.39149C18.1404 4.39149 17.614 4.17021 17.1579 3.72766C16.7018 3.28511 16.4737 2.77447 16.4737 2.19574C16.4737 1.61702 16.7018 1.10638 17.1579 0.66383C17.614 0.221277 18.1404 0 18.7368 0C19.3333 0 19.8596 0.221277 20.3158 0.66383C20.7719 1.10638 21 1.61702 21 2.19574C21 2.77447 20.7719 3.28511 20.3158 3.72766ZM3.68421 13.7362C4.14035 13.2936 4.66667 13.0723 5.26316 13.0723C5.85965 13.0723 6.38597 13.2936 6.84211 13.7362C7.29825 14.1787 7.52632 14.6894 7.52632 15.2681C7.52632 15.8468 7.29825 16.3574 6.84211 16.8C6.38597 17.2426 5.85965 17.4638 5.26316 17.4638C4.66667 17.4638 4.14035 17.2426 3.68421 16.8C3.22807 16.3574 3 15.8468 3 15.2681C3 14.6894 3.22807 14.1787 3.68421 13.7362ZM3.68421 7.2C4.14035 6.75745 4.66667 6.53617 5.26316 6.53617C5.85965 6.53617 6.38597 6.75745 6.84211 7.2C7.29825 7.64255 7.52632 8.15319 7.52632 8.73191C7.52632 9.31064 7.29825 9.82128 6.84211 10.2638C6.38597 10.7064 5.85965 10.9277 5.26316 10.9277C4.66667 10.9277 4.14035 10.7064 3.68421 10.2638C3.22807 9.82128 3 9.31064 3 8.73191C3 8.15319 3.22807 7.64255 3.68421 7.2ZM3.68421 0.66383C4.14035 0.221277 4.66667 0 5.26316 0C5.85965 0 6.38597 0.221277 6.84211 0.66383C7.29825 1.10638 7.52632 1.61702 7.52632 2.19574C7.52632 2.77447 7.29825 3.28511 6.84211 3.72766C6.38597 4.17021 5.85965 4.39149 5.26316 4.39149C4.66667 4.39149 4.14035 4.17021 3.68421 3.72766C3.22807 3.28511 3 2.77447 3 2.19574C3 1.61702 3.22807 1.10638 3.68421 0.66383ZM10.4211 20.2723C10.8772 19.8298 11.4035 19.6085 12 19.6085C12.5965 19.6085 13.1228 19.8298 13.5789 20.2723C14.0351 20.7149 14.2632 21.2255 14.2632 21.8043C14.2632 22.383 14.0351 22.8936 13.5789 23.3362C13.1228 23.7787 12.5965 24 12 24C11.4035 24 10.8772 23.7787 10.4211 23.3362C9.96491 22.8936 9.73684 22.383 9.73684 21.8043C9.73684 21.2255 9.96491 20.7149 10.4211 20.2723Z" fill="white" fill-opacity="0.65"></path>
    </svg>`;
  $("#btnDialpad").html(oldSvgDialap);

  var oldSvgHisCall = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.0647 7.57292H13.7076V12.2604L17.558 14.6042L16.7366 15.9583L12.0647 13.0938V7.57292ZM6.16071 4.91667C8.11161 2.97222 10.439 2 13.1429 2C15.8467 2 18.157 2.97222 20.0737 4.91667C22.0246 6.86111 23 9.22222 23 12C23 14.7778 22.0246 17.1389 20.0737 19.0833C18.157 21.0278 15.8467 22 13.1429 22C12.0134 22 10.7641 21.7222 9.39509 21.1667C8.06027 20.5764 6.99926 19.8819 6.21205 19.0833L7.75223 17.4688C9.25818 18.9965 11.0551 19.7604 13.1429 19.7604C15.2649 19.7604 17.0789 19.0139 18.5848 17.5208C20.0908 15.9931 20.8438 14.1528 20.8438 12C20.8438 9.84722 20.0908 8.02431 18.5848 6.53125C17.0789 5.00347 15.2649 4.23958 13.1429 4.23958C11.0208 4.23958 9.20685 5.00347 7.70089 6.53125C6.22917 8.02431 5.4933 9.84722 5.4933 12H8.77902L4.36384 16.4792L4.26116 16.3229L0 12H3.28571C3.28571 9.22222 4.24405 6.86111 6.16071 4.91667Z" fill="white" fill-opacity="0.65"></path>
  </svg>`;
  $("#btnMissCall").html(oldSvgHisCall);

  var olSvgMissCall = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.7188 16.7953C23.9063 16.9843 24 17.2205 24 17.5039C24 17.7874 23.9063 18.0236 23.7188 18.2126L21.2344 20.7165C21.0469 20.9055 20.8125 21 20.5313 21C20.25 21 20.0156 20.9055 19.8281 20.7165C18.9531 19.8976 18.0625 19.2677 17.1563 18.8268C16.7813 18.6693 16.5938 18.3701 16.5938 17.9291V14.811C15.1563 14.3386 13.625 14.1024 12 14.1024C10.375 14.1024 8.84375 14.3386 7.40625 14.811V17.9291C7.40625 18.4016 7.21875 18.7165 6.84375 18.874C5.84375 19.3465 4.95313 19.9606 4.17188 20.7165C3.98438 20.9055 3.75 21 3.46875 21C3.1875 21 2.95313 20.9055 2.76563 20.7165L0.28125 18.2126C0.09375 18.0236 0 17.7874 0 17.5039C0 17.2205 0.09375 16.9843 0.28125 16.7953C3.5625 13.6457 7.46875 12.0709 12 12.0709C13.875 12.0709 15.9531 12.5433 18.2344 13.4882C20.5156 14.4016 22.3438 15.5039 23.7188 16.7953ZM6.51563 5.50394V9.04724H5.01563V3H11.0156V4.51181H7.5L12 9.04724L18 3L18.9844 3.99213L12 11.0787L6.51563 5.50394Z" fill="white" fill-opacity="0.65"></path>
  </svg>`;
  $("#btnMissCall").html(olSvgMissCall);

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
  let email_contact = $(elem).attr("attr-user-email");
  idContact = $(elem).attr("attr-user-id");
  nameContact = name_contact;
  emailContact = email_contact ? email_contact : emailContact;
  isInboundCall = false;
  if (phone_contact !== "null") {
    //show app
    client.interface
      .trigger("show", { id: "softphone" })
      .then(function () {
        resizeAppDefault();
        existContact = true;

        $("#mainOutbound").css("display", "block");
        $("#mainContent").css("display", "none");
        $("#mainListContacts").css("display", "none");
        $("#mainBusyCall").css("display", "none");
        $("#mainCollapseClickToCall").css("display", "none");
        $("#mainListHistoryCall").css("display", "none");
        $("#mainInbound").css("display", "none");
        $("#mainInboundCollapse").css("display", "none");
        $("#mainInboundListen").css("display", "none");
        $("#mainInboundListenCollapse").css("display", "none");
        $("#headCourse").css("display", "none");

        $("#appTxtNameContact").text(name_contact);
        $("#appTextPhone").text(phone_contact);

        $("#appTxtServiceOutbound").text(appTxtService);

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
  var newSvgHisCall = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.0647 7.57292H13.7076V12.2604L17.558 14.6042L16.7366 15.9583L12.0647 13.0938V7.57292ZM6.16071 4.91667C8.11161 2.97222 10.439 2 13.1429 2C15.8467 2 18.157 2.97222 20.0737 4.91667C22.0246 6.86111 23 9.22222 23 12C23 14.7778 22.0246 17.1389 20.0737 19.0833C18.157 21.0278 15.8467 22 13.1429 22C12.0134 22 10.7641 21.7222 9.39509 21.1667C8.06027 20.5764 6.99926 19.8819 6.21205 19.0833L7.75223 17.4688C9.25818 18.9965 11.0551 19.7604 13.1429 19.7604C15.2649 19.7604 17.0789 19.0139 18.5848 17.5208C20.0908 15.9931 20.8438 14.1528 20.8438 12C20.8438 9.84722 20.0908 8.02431 18.5848 6.53125C17.0789 5.00347 15.2649 4.23958 13.1429 4.23958C11.0208 4.23958 9.20685 5.00347 7.70089 6.53125C6.22917 8.02431 5.4933 9.84722 5.4933 12H8.77902L4.36384 16.4792L4.26116 16.3229L0 12H3.28571C3.28571 9.22222 4.24405 6.86111 6.16071 4.91667Z" fill="white"></path>
  </svg>
`;
  $("#btnHistory").html(newSvgHisCall);

  var oldSvgDialap = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.4211 0.66383C10.8772 0.221277 11.4035 0 12 0C12.5965 0 13.1228 0.221277 13.5789 0.66383C14.0351 1.10638 14.2632 1.61702 14.2632 2.19574C14.2632 2.77447 14.0351 3.28511 13.5789 3.72766C13.1228 4.17021 12.5965 4.39149 12 4.39149C11.4035 4.39149 10.8772 4.17021 10.4211 3.72766C9.96491 3.28511 9.73684 2.77447 9.73684 2.19574C9.73684 1.61702 9.96491 1.10638 10.4211 0.66383ZM10.4211 7.2C10.8772 6.75745 11.4035 6.53617 12 6.53617C12.5965 6.53617 13.1228 6.75745 13.5789 7.2C14.0351 7.64255 14.2632 8.15319 14.2632 8.73191C14.2632 9.31064 14.0351 9.82128 13.5789 10.2638C13.1228 10.7064 12.5965 10.9277 12 10.9277C11.4035 10.9277 10.8772 10.7064 10.4211 10.2638C9.96491 9.82128 9.73684 9.31064 9.73684 8.73191C9.73684 8.15319 9.96491 7.64255 10.4211 7.2ZM17.1579 7.2C17.614 6.75745 18.1404 6.53617 18.7368 6.53617C19.3333 6.53617 19.8596 6.75745 20.3158 7.2C20.7719 7.64255 21 8.15319 21 8.73191C21 9.31064 20.7719 9.82128 20.3158 10.2638C19.8596 10.7064 19.3333 10.9277 18.7368 10.9277C18.1404 10.9277 17.614 10.7064 17.1579 10.2638C16.7018 9.82128 16.4737 9.31064 16.4737 8.73191C16.4737 8.15319 16.7018 7.64255 17.1579 7.2ZM17.1579 13.7362C17.614 13.2936 18.1404 13.0723 18.7368 13.0723C19.3333 13.0723 19.8596 13.2936 20.3158 13.7362C20.7719 14.1787 21 14.6894 21 15.2681C21 15.8468 20.7719 16.3574 20.3158 16.8C19.8596 17.2426 19.3333 17.4638 18.7368 17.4638C18.1404 17.4638 17.614 17.2426 17.1579 16.8C16.7018 16.3574 16.4737 15.8468 16.4737 15.2681C16.4737 14.6894 16.7018 14.1787 17.1579 13.7362ZM10.4211 13.7362C10.8772 13.2936 11.4035 13.0723 12 13.0723C12.5965 13.0723 13.1228 13.2936 13.5789 13.7362C14.0351 14.1787 14.2632 14.6894 14.2632 15.2681C14.2632 15.8468 14.0351 16.3574 13.5789 16.8C13.1228 17.2426 12.5965 17.4638 12 17.4638C11.4035 17.4638 10.8772 17.2426 10.4211 16.8C9.96491 16.3574 9.73684 15.8468 9.73684 15.2681C9.73684 14.6894 9.96491 14.1787 10.4211 13.7362ZM20.3158 3.72766C19.8596 4.17021 19.3333 4.39149 18.7368 4.39149C18.1404 4.39149 17.614 4.17021 17.1579 3.72766C16.7018 3.28511 16.4737 2.77447 16.4737 2.19574C16.4737 1.61702 16.7018 1.10638 17.1579 0.66383C17.614 0.221277 18.1404 0 18.7368 0C19.3333 0 19.8596 0.221277 20.3158 0.66383C20.7719 1.10638 21 1.61702 21 2.19574C21 2.77447 20.7719 3.28511 20.3158 3.72766ZM3.68421 13.7362C4.14035 13.2936 4.66667 13.0723 5.26316 13.0723C5.85965 13.0723 6.38597 13.2936 6.84211 13.7362C7.29825 14.1787 7.52632 14.6894 7.52632 15.2681C7.52632 15.8468 7.29825 16.3574 6.84211 16.8C6.38597 17.2426 5.85965 17.4638 5.26316 17.4638C4.66667 17.4638 4.14035 17.2426 3.68421 16.8C3.22807 16.3574 3 15.8468 3 15.2681C3 14.6894 3.22807 14.1787 3.68421 13.7362ZM3.68421 7.2C4.14035 6.75745 4.66667 6.53617 5.26316 6.53617C5.85965 6.53617 6.38597 6.75745 6.84211 7.2C7.29825 7.64255 7.52632 8.15319 7.52632 8.73191C7.52632 9.31064 7.29825 9.82128 6.84211 10.2638C6.38597 10.7064 5.85965 10.9277 5.26316 10.9277C4.66667 10.9277 4.14035 10.7064 3.68421 10.2638C3.22807 9.82128 3 9.31064 3 8.73191C3 8.15319 3.22807 7.64255 3.68421 7.2ZM3.68421 0.66383C4.14035 0.221277 4.66667 0 5.26316 0C5.85965 0 6.38597 0.221277 6.84211 0.66383C7.29825 1.10638 7.52632 1.61702 7.52632 2.19574C7.52632 2.77447 7.29825 3.28511 6.84211 3.72766C6.38597 4.17021 5.85965 4.39149 5.26316 4.39149C4.66667 4.39149 4.14035 4.17021 3.68421 3.72766C3.22807 3.28511 3 2.77447 3 2.19574C3 1.61702 3.22807 1.10638 3.68421 0.66383ZM10.4211 20.2723C10.8772 19.8298 11.4035 19.6085 12 19.6085C12.5965 19.6085 13.1228 19.8298 13.5789 20.2723C14.0351 20.7149 14.2632 21.2255 14.2632 21.8043C14.2632 22.383 14.0351 22.8936 13.5789 23.3362C13.1228 23.7787 12.5965 24 12 24C11.4035 24 10.8772 23.7787 10.4211 23.3362C9.96491 22.8936 9.73684 22.383 9.73684 21.8043C9.73684 21.2255 9.96491 20.7149 10.4211 20.2723Z" fill="white" fill-opacity="0.65"></path>
    </svg>`;
  $("#btnDialpad").html(oldSvgDialap);

  var olSvgMissCall = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.7188 16.7953C23.9063 16.9843 24 17.2205 24 17.5039C24 17.7874 23.9063 18.0236 23.7188 18.2126L21.2344 20.7165C21.0469 20.9055 20.8125 21 20.5313 21C20.25 21 20.0156 20.9055 19.8281 20.7165C18.9531 19.8976 18.0625 19.2677 17.1563 18.8268C16.7813 18.6693 16.5938 18.3701 16.5938 17.9291V14.811C15.1563 14.3386 13.625 14.1024 12 14.1024C10.375 14.1024 8.84375 14.3386 7.40625 14.811V17.9291C7.40625 18.4016 7.21875 18.7165 6.84375 18.874C5.84375 19.3465 4.95313 19.9606 4.17188 20.7165C3.98438 20.9055 3.75 21 3.46875 21C3.1875 21 2.95313 20.9055 2.76563 20.7165L0.28125 18.2126C0.09375 18.0236 0 17.7874 0 17.5039C0 17.2205 0.09375 16.9843 0.28125 16.7953C3.5625 13.6457 7.46875 12.0709 12 12.0709C13.875 12.0709 15.9531 12.5433 18.2344 13.4882C20.5156 14.4016 22.3438 15.5039 23.7188 16.7953ZM6.51563 5.50394V9.04724H5.01563V3H11.0156V4.51181H7.5L12 9.04724L18 3L18.9844 3.99213L12 11.0787L6.51563 5.50394Z" fill="white" fill-opacity="0.65"></path>
  </svg>`;
  $("#btnMissCall").html(olSvgMissCall);

  var oldSvgContact = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.8594 14.0156C17.6094 13.3594 17.4844 12.6875 17.4844 12C17.4844 11.3125 17.6094 10.6406 17.8594 9.98438H19.5L21 8.01563L19.0313 6C18.4688 6.4375 17.9063 7.04688 17.3438 7.82813C16.8125 8.60938 16.4531 9.32813 16.2656 9.98438C16.0781 10.6406 15.9844 11.3125 15.9844 12C15.9844 12.6875 16.0781 13.3594 16.2656 14.0156C16.4531 14.6719 16.8125 15.3906 17.3438 16.1719C17.9063 16.9531 18.4688 17.5625 19.0313 18L21 15.9844L19.5 14.0156H17.8594ZM14.0156 18V17.0156C14.0156 16.1094 13.3281 15.375 11.9531 14.8125C10.5781 14.2188 9.26563 13.9219 8.01563 13.9219C6.76563 13.9219 5.45313 14.2188 4.07813 14.8125C2.70313 15.375 2.01563 16.1094 2.01563 17.0156V18H14.0156ZM10.125 6.89063C9.53125 6.29688 8.82813 6 8.01563 6C7.20313 6 6.5 6.29688 5.90625 6.89063C5.3125 7.48438 5.01563 8.1875 5.01563 9C5.01563 9.8125 5.3125 10.5156 5.90625 11.1094C6.5 11.7031 7.20313 12 8.01563 12C8.82813 12 9.53125 11.7031 10.125 11.1094C10.7188 10.5156 11.0156 9.8125 11.0156 9C11.0156 8.1875 10.7188 7.48438 10.125 6.89063ZM21.9844 3C22.5156 3 22.9844 3.20313 23.3906 3.60938C23.7969 4.01563 24 4.48438 24 5.01563V18.9844C24 19.5156 23.7969 19.9844 23.3906 20.3906C22.9844 20.7969 22.5156 21 21.9844 21H2.01563C1.48438 21 1.01563 20.7969 0.609375 20.3906C0.203125 19.9844 0 19.5156 0 18.9844V5.01563C0 4.48438 0.203125 4.01563 0.609375 3.60938C1.01563 3.20313 1.48438 3 2.01563 3H21.9844Z" fill="white" fill-opacity="0.65"></path>
</svg>`;
  $("#btnContact").html(oldSvgContact);

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

  // const labelMainListHistoryCall = document.querySelector(
  //   "#mainListHistoryCall .appTxtService"
  // );
  // const dropdown = document.querySelector(
  //   "#mainListHistoryCall .dropdown--extend"
  // );

  // if (labelMainListHistoryCall && dropdown) {
  //   labelMainListHistoryCall.textContent = appTxtService; // Thiết lập lại giá trị của label
  //   labelMainListHistoryCall.style.display = "inline-block";
  //   dropdown.style.display = "none";
  // } else {
  //   console.error("Label or Dropdown element not found in mainListHistoryCall");
  // }
  $("#appTxtService").text(appTxtService);
  console.log("listHisCall", listHisCall);
  // });
}

async function showMissCall() {
  listMissCall = [];
  listHisCall = [];

  var oldSvgDialap = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.4211 0.66383C10.8772 0.221277 11.4035 0 12 0C12.5965 0 13.1228 0.221277 13.5789 0.66383C14.0351 1.10638 14.2632 1.61702 14.2632 2.19574C14.2632 2.77447 14.0351 3.28511 13.5789 3.72766C13.1228 4.17021 12.5965 4.39149 12 4.39149C11.4035 4.39149 10.8772 4.17021 10.4211 3.72766C9.96491 3.28511 9.73684 2.77447 9.73684 2.19574C9.73684 1.61702 9.96491 1.10638 10.4211 0.66383ZM10.4211 7.2C10.8772 6.75745 11.4035 6.53617 12 6.53617C12.5965 6.53617 13.1228 6.75745 13.5789 7.2C14.0351 7.64255 14.2632 8.15319 14.2632 8.73191C14.2632 9.31064 14.0351 9.82128 13.5789 10.2638C13.1228 10.7064 12.5965 10.9277 12 10.9277C11.4035 10.9277 10.8772 10.7064 10.4211 10.2638C9.96491 9.82128 9.73684 9.31064 9.73684 8.73191C9.73684 8.15319 9.96491 7.64255 10.4211 7.2ZM17.1579 7.2C17.614 6.75745 18.1404 6.53617 18.7368 6.53617C19.3333 6.53617 19.8596 6.75745 20.3158 7.2C20.7719 7.64255 21 8.15319 21 8.73191C21 9.31064 20.7719 9.82128 20.3158 10.2638C19.8596 10.7064 19.3333 10.9277 18.7368 10.9277C18.1404 10.9277 17.614 10.7064 17.1579 10.2638C16.7018 9.82128 16.4737 9.31064 16.4737 8.73191C16.4737 8.15319 16.7018 7.64255 17.1579 7.2ZM17.1579 13.7362C17.614 13.2936 18.1404 13.0723 18.7368 13.0723C19.3333 13.0723 19.8596 13.2936 20.3158 13.7362C20.7719 14.1787 21 14.6894 21 15.2681C21 15.8468 20.7719 16.3574 20.3158 16.8C19.8596 17.2426 19.3333 17.4638 18.7368 17.4638C18.1404 17.4638 17.614 17.2426 17.1579 16.8C16.7018 16.3574 16.4737 15.8468 16.4737 15.2681C16.4737 14.6894 16.7018 14.1787 17.1579 13.7362ZM10.4211 13.7362C10.8772 13.2936 11.4035 13.0723 12 13.0723C12.5965 13.0723 13.1228 13.2936 13.5789 13.7362C14.0351 14.1787 14.2632 14.6894 14.2632 15.2681C14.2632 15.8468 14.0351 16.3574 13.5789 16.8C13.1228 17.2426 12.5965 17.4638 12 17.4638C11.4035 17.4638 10.8772 17.2426 10.4211 16.8C9.96491 16.3574 9.73684 15.8468 9.73684 15.2681C9.73684 14.6894 9.96491 14.1787 10.4211 13.7362ZM20.3158 3.72766C19.8596 4.17021 19.3333 4.39149 18.7368 4.39149C18.1404 4.39149 17.614 4.17021 17.1579 3.72766C16.7018 3.28511 16.4737 2.77447 16.4737 2.19574C16.4737 1.61702 16.7018 1.10638 17.1579 0.66383C17.614 0.221277 18.1404 0 18.7368 0C19.3333 0 19.8596 0.221277 20.3158 0.66383C20.7719 1.10638 21 1.61702 21 2.19574C21 2.77447 20.7719 3.28511 20.3158 3.72766ZM3.68421 13.7362C4.14035 13.2936 4.66667 13.0723 5.26316 13.0723C5.85965 13.0723 6.38597 13.2936 6.84211 13.7362C7.29825 14.1787 7.52632 14.6894 7.52632 15.2681C7.52632 15.8468 7.29825 16.3574 6.84211 16.8C6.38597 17.2426 5.85965 17.4638 5.26316 17.4638C4.66667 17.4638 4.14035 17.2426 3.68421 16.8C3.22807 16.3574 3 15.8468 3 15.2681C3 14.6894 3.22807 14.1787 3.68421 13.7362ZM3.68421 7.2C4.14035 6.75745 4.66667 6.53617 5.26316 6.53617C5.85965 6.53617 6.38597 6.75745 6.84211 7.2C7.29825 7.64255 7.52632 8.15319 7.52632 8.73191C7.52632 9.31064 7.29825 9.82128 6.84211 10.2638C6.38597 10.7064 5.85965 10.9277 5.26316 10.9277C4.66667 10.9277 4.14035 10.7064 3.68421 10.2638C3.22807 9.82128 3 9.31064 3 8.73191C3 8.15319 3.22807 7.64255 3.68421 7.2ZM3.68421 0.66383C4.14035 0.221277 4.66667 0 5.26316 0C5.85965 0 6.38597 0.221277 6.84211 0.66383C7.29825 1.10638 7.52632 1.61702 7.52632 2.19574C7.52632 2.77447 7.29825 3.28511 6.84211 3.72766C6.38597 4.17021 5.85965 4.39149 5.26316 4.39149C4.66667 4.39149 4.14035 4.17021 3.68421 3.72766C3.22807 3.28511 3 2.77447 3 2.19574C3 1.61702 3.22807 1.10638 3.68421 0.66383ZM10.4211 20.2723C10.8772 19.8298 11.4035 19.6085 12 19.6085C12.5965 19.6085 13.1228 19.8298 13.5789 20.2723C14.0351 20.7149 14.2632 21.2255 14.2632 21.8043C14.2632 22.383 14.0351 22.8936 13.5789 23.3362C13.1228 23.7787 12.5965 24 12 24C11.4035 24 10.8772 23.7787 10.4211 23.3362C9.96491 22.8936 9.73684 22.383 9.73684 21.8043C9.73684 21.2255 9.96491 20.7149 10.4211 20.2723Z" fill="white" fill-opacity="0.65"></path>
    </svg>`;
  $("#btnDialpad").html(oldSvgDialap);

  var oldSvgHisCall = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.0647 7.57292H13.7076V12.2604L17.558 14.6042L16.7366 15.9583L12.0647 13.0938V7.57292ZM6.16071 4.91667C8.11161 2.97222 10.439 2 13.1429 2C15.8467 2 18.157 2.97222 20.0737 4.91667C22.0246 6.86111 23 9.22222 23 12C23 14.7778 22.0246 17.1389 20.0737 19.0833C18.157 21.0278 15.8467 22 13.1429 22C12.0134 22 10.7641 21.7222 9.39509 21.1667C8.06027 20.5764 6.99926 19.8819 6.21205 19.0833L7.75223 17.4688C9.25818 18.9965 11.0551 19.7604 13.1429 19.7604C15.2649 19.7604 17.0789 19.0139 18.5848 17.5208C20.0908 15.9931 20.8438 14.1528 20.8438 12C20.8438 9.84722 20.0908 8.02431 18.5848 6.53125C17.0789 5.00347 15.2649 4.23958 13.1429 4.23958C11.0208 4.23958 9.20685 5.00347 7.70089 6.53125C6.22917 8.02431 5.4933 9.84722 5.4933 12H8.77902L4.36384 16.4792L4.26116 16.3229L0 12H3.28571C3.28571 9.22222 4.24405 6.86111 6.16071 4.91667Z" fill="white" fill-opacity="0.65"></path>
  </svg>`;
  $("#btnHistory").html(oldSvgHisCall);

  var newSvgMissCall = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.7188 16.7958C23.9063 16.9847 24 17.221 24 17.5044C24 17.7879 23.9063 18.0241 23.7188 18.2131L21.2344 20.717C21.0469 20.906 20.8125 21.0005 20.5313 21.0005C20.25 21.0005 20.0156 20.906 19.8281 20.717C18.9531 19.8981 18.0625 19.2682 17.1563 18.8273C16.7813 18.6698 16.5938 18.3706 16.5938 17.9296V14.8115C15.1563 14.3391 13.625 14.1029 12 14.1029C10.375 14.1029 8.84375 14.3391 7.40625 14.8115V17.9296C7.40625 18.4021 7.21875 18.717 6.84375 18.8745C5.84375 19.3469 4.95313 19.9611 4.17188 20.717C3.98438 20.906 3.75 21.0005 3.46875 21.0005C3.1875 21.0005 2.95313 20.906 2.76563 20.717L0.28125 18.2131C0.09375 18.0241 0 17.7879 0 17.5044C0 17.221 0.09375 16.9847 0.28125 16.7958C3.5625 13.6462 7.46875 12.0714 12 12.0714C13.875 12.0714 15.9531 12.5438 18.2344 13.4887C20.5156 14.4021 22.3438 15.5044 23.7188 16.7958ZM6.51563 5.50443V9.04773H5.01563V3.00049H11.0156V4.5123H7.5L12 9.04773L18 3.00049L18.9844 3.99261L12 11.0792L6.51563 5.50443Z" fill="white"></path>
  </svg>`;
  $("#btnMissCall").html(newSvgMissCall);

  var oldSvgContact = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.8594 14.0156C17.6094 13.3594 17.4844 12.6875 17.4844 12C17.4844 11.3125 17.6094 10.6406 17.8594 9.98438H19.5L21 8.01563L19.0313 6C18.4688 6.4375 17.9063 7.04688 17.3438 7.82813C16.8125 8.60938 16.4531 9.32813 16.2656 9.98438C16.0781 10.6406 15.9844 11.3125 15.9844 12C15.9844 12.6875 16.0781 13.3594 16.2656 14.0156C16.4531 14.6719 16.8125 15.3906 17.3438 16.1719C17.9063 16.9531 18.4688 17.5625 19.0313 18L21 15.9844L19.5 14.0156H17.8594ZM14.0156 18V17.0156C14.0156 16.1094 13.3281 15.375 11.9531 14.8125C10.5781 14.2188 9.26563 13.9219 8.01563 13.9219C6.76563 13.9219 5.45313 14.2188 4.07813 14.8125C2.70313 15.375 2.01563 16.1094 2.01563 17.0156V18H14.0156ZM10.125 6.89063C9.53125 6.29688 8.82813 6 8.01563 6C7.20313 6 6.5 6.29688 5.90625 6.89063C5.3125 7.48438 5.01563 8.1875 5.01563 9C5.01563 9.8125 5.3125 10.5156 5.90625 11.1094C6.5 11.7031 7.20313 12 8.01563 12C8.82813 12 9.53125 11.7031 10.125 11.1094C10.7188 10.5156 11.0156 9.8125 11.0156 9C11.0156 8.1875 10.7188 7.48438 10.125 6.89063ZM21.9844 3C22.5156 3 22.9844 3.20313 23.3906 3.60938C23.7969 4.01563 24 4.48438 24 5.01563V18.9844C24 19.5156 23.7969 19.9844 23.3906 20.3906C22.9844 20.7969 22.5156 21 21.9844 21H2.01563C1.48438 21 1.01563 20.7969 0.609375 20.3906C0.203125 19.9844 0 19.5156 0 18.9844V5.01563C0 4.48438 0.203125 4.01563 0.609375 3.60938C1.01563 3.20313 1.48438 3 2.01563 3H21.9844Z" fill="white" fill-opacity="0.65"></path>
</svg>`;
  $("#btnContact").html(oldSvgContact);

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

function searchContact() {
  const val = document.querySelector('input[name="search_contact"]').value;
  const phone12 = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,5}$/;
  const phone = /^\d{10}$/;
  if (val.match(phone) || val.match(phone12)) {
    filteredContactSearch(val);
    // filterContactDataInbound(val)
  } else {
    searchContactKeyword(val);
  }
}

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

  stop();
  document.getElementById("mainInboundCollapse").style.display = "none";
  document.getElementById("mainInbound").style.display = "none";
  document.getElementById("mainCollapseClickToCall").style.display = "none";
  document.getElementById("mainInboundCollapse").style.display = "none";

  $("#headCourse").css("display", "block");
  // actionEndCall = false;
  onAppDeactive();
  location.reload(true);
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
      $("#mainInboundListen").css("display", "block");
      $("#mainInboundListenCollapse").css("display", "none");
      $("#mainContent").css("display", "none");
      $("#mainOutbound").css("display", "none");
      $("#mainBusyCall").css("display", "none");
      $("#mainCollapseClickToCall").css("display", "none");
      $("#mainListContacts").css("display", "none");
      $("#mainListHistoryCall").css("display", "none");
      $("#mainListMissCall").css("display", "none");
      $("#mainInbound").css("display", "none");
      $("#mainInboundCollapse").css("display", "none");
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
        description: `<div id="origin_ticket"><span>Hey ${
          nameContact ? nameContact : "Unknown Contact"
        } - ${phoneNumberReceiver} 👋, created ticket!</span></div>`,
        status: 2,
        source: 3, // phone
      });
    } else {
      ticketDetails = JSON.stringify({
        requester_id: idContact,
        subject: _subject,
        priority: 1,
        description: `<div id="origin_ticket"><span>Hey "Unknown Contact" - ${phoneNumberReceiver} 👋, created ticket!</span></div>`,
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

async function insertIdTicketAs7(idTicket) {
  console.log("co chay vao insertIdTicketAs7:", idTicket);
  try {
    var result = await client.request.invokeTemplate("insertIdTicketAs7", {
      context: {
        // terminalId: 115,
        accountCode: idTicket,
        accountName: idContact,
      },
    });

    var data = result?.response ? JSON.parse(result?.response) : [];
    console.info("Successfully created insertIdTicketAs7 in Freshdesk", data);
    console.log("detail insertIdTicketAs7", data);
  } catch (error) {
    console.error("data insertIdTicketAs7", error);
  }
}

function showMainDialpad() {
  var newSvgDialap = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.4211 0.66383C10.8772 0.221277 11.4035 0 12 0C12.5965 0 13.1228 0.221277 13.5789 0.66383C14.0351 1.10638 14.2632 1.61702 14.2632 2.19574C14.2632 2.77447 14.0351 3.28511 13.5789 3.72766C13.1228 4.17021 12.5965 4.39149 12 4.39149C11.4035 4.39149 10.8772 4.17021 10.4211 3.72766C9.96491 3.28511 9.73684 2.77447 9.73684 2.19574C9.73684 1.61702 9.96491 1.10638 10.4211 0.66383ZM10.4211 7.2C10.8772 6.75745 11.4035 6.53617 12 6.53617C12.5965 6.53617 13.1228 6.75745 13.5789 7.2C14.0351 7.64255 14.2632 8.15319 14.2632 8.73191C14.2632 9.31064 14.0351 9.82128 13.5789 10.2638C13.1228 10.7064 12.5965 10.9277 12 10.9277C11.4035 10.9277 10.8772 10.7064 10.4211 10.2638C9.96491 9.82128 9.73684 9.31064 9.73684 8.73191C9.73684 8.15319 9.96491 7.64255 10.4211 7.2ZM17.1579 7.2C17.614 6.75745 18.1404 6.53617 18.7368 6.53617C19.3333 6.53617 19.8596 6.75745 20.3158 7.2C20.7719 7.64255 21 8.15319 21 8.73191C21 9.31064 20.7719 9.82128 20.3158 10.2638C19.8596 10.7064 19.3333 10.9277 18.7368 10.9277C18.1404 10.9277 17.614 10.7064 17.1579 10.2638C16.7018 9.82128 16.4737 9.31064 16.4737 8.73191C16.4737 8.15319 16.7018 7.64255 17.1579 7.2ZM17.1579 13.7362C17.614 13.2936 18.1404 13.0723 18.7368 13.0723C19.3333 13.0723 19.8596 13.2936 20.3158 13.7362C20.7719 14.1787 21 14.6894 21 15.2681C21 15.8468 20.7719 16.3574 20.3158 16.8C19.8596 17.2426 19.3333 17.4638 18.7368 17.4638C18.1404 17.4638 17.614 17.2426 17.1579 16.8C16.7018 16.3574 16.4737 15.8468 16.4737 15.2681C16.4737 14.6894 16.7018 14.1787 17.1579 13.7362ZM10.4211 13.7362C10.8772 13.2936 11.4035 13.0723 12 13.0723C12.5965 13.0723 13.1228 13.2936 13.5789 13.7362C14.0351 14.1787 14.2632 14.6894 14.2632 15.2681C14.2632 15.8468 14.0351 16.3574 13.5789 16.8C13.1228 17.2426 12.5965 17.4638 12 17.4638C11.4035 17.4638 10.8772 17.2426 10.4211 16.8C9.96491 16.3574 9.73684 15.8468 9.73684 15.2681C9.73684 14.6894 9.96491 14.1787 10.4211 13.7362ZM20.3158 3.72766C19.8596 4.17021 19.3333 4.39149 18.7368 4.39149C18.1404 4.39149 17.614 4.17021 17.1579 3.72766C16.7018 3.28511 16.4737 2.77447 16.4737 2.19574C16.4737 1.61702 16.7018 1.10638 17.1579 0.66383C17.614 0.221277 18.1404 0 18.7368 0C19.3333 0 19.8596 0.221277 20.3158 0.66383C20.7719 1.10638 21 1.61702 21 2.19574C21 2.77447 20.7719 3.28511 20.3158 3.72766ZM3.68421 13.7362C4.14035 13.2936 4.66667 13.0723 5.26316 13.0723C5.85965 13.0723 6.38597 13.2936 6.84211 13.7362C7.29825 14.1787 7.52632 14.6894 7.52632 15.2681C7.52632 15.8468 7.29825 16.3574 6.84211 16.8C6.38597 17.2426 5.85965 17.4638 5.26316 17.4638C4.66667 17.4638 4.14035 17.2426 3.68421 16.8C3.22807 16.3574 3 15.8468 3 15.2681C3 14.6894 3.22807 14.1787 3.68421 13.7362ZM3.68421 7.2C4.14035 6.75745 4.66667 6.53617 5.26316 6.53617C5.85965 6.53617 6.38597 6.75745 6.84211 7.2C7.29825 7.64255 7.52632 8.15319 7.52632 8.73191C7.52632 9.31064 7.29825 9.82128 6.84211 10.2638C6.38597 10.7064 5.85965 10.9277 5.26316 10.9277C4.66667 10.9277 4.14035 10.7064 3.68421 10.2638C3.22807 9.82128 3 9.31064 3 8.73191C3 8.15319 3.22807 7.64255 3.68421 7.2ZM3.68421 0.66383C4.14035 0.221277 4.66667 0 5.26316 0C5.85965 0 6.38597 0.221277 6.84211 0.66383C7.29825 1.10638 7.52632 1.61702 7.52632 2.19574C7.52632 2.77447 7.29825 3.28511 6.84211 3.72766C6.38597 4.17021 5.85965 4.39149 5.26316 4.39149C4.66667 4.39149 4.14035 4.17021 3.68421 3.72766C3.22807 3.28511 3 2.77447 3 2.19574C3 1.61702 3.22807 1.10638 3.68421 0.66383ZM10.4211 20.2723C10.8772 19.8298 11.4035 19.6085 12 19.6085C12.5965 19.6085 13.1228 19.8298 13.5789 20.2723C14.0351 20.7149 14.2632 21.2255 14.2632 21.8043C14.2632 22.383 14.0351 22.8936 13.5789 23.3362C13.1228 23.7787 12.5965 24 12 24C11.4035 24 10.8772 23.7787 10.4211 23.3362C9.96491 22.8936 9.73684 22.383 9.73684 21.8043C9.73684 21.2255 9.96491 20.7149 10.4211 20.2723Z" fill="white"></path>
  </svg>`;
  $("#btnDialpad").html(newSvgDialap);

  var oldSvgHisCall = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.0647 7.57292H13.7076V12.2604L17.558 14.6042L16.7366 15.9583L12.0647 13.0938V7.57292ZM6.16071 4.91667C8.11161 2.97222 10.439 2 13.1429 2C15.8467 2 18.157 2.97222 20.0737 4.91667C22.0246 6.86111 23 9.22222 23 12C23 14.7778 22.0246 17.1389 20.0737 19.0833C18.157 21.0278 15.8467 22 13.1429 22C12.0134 22 10.7641 21.7222 9.39509 21.1667C8.06027 20.5764 6.99926 19.8819 6.21205 19.0833L7.75223 17.4688C9.25818 18.9965 11.0551 19.7604 13.1429 19.7604C15.2649 19.7604 17.0789 19.0139 18.5848 17.5208C20.0908 15.9931 20.8438 14.1528 20.8438 12C20.8438 9.84722 20.0908 8.02431 18.5848 6.53125C17.0789 5.00347 15.2649 4.23958 13.1429 4.23958C11.0208 4.23958 9.20685 5.00347 7.70089 6.53125C6.22917 8.02431 5.4933 9.84722 5.4933 12H8.77902L4.36384 16.4792L4.26116 16.3229L0 12H3.28571C3.28571 9.22222 4.24405 6.86111 6.16071 4.91667Z" fill="white" fill-opacity="0.65"></path>
  </svg>`;
  $("#btnHistory").html(oldSvgHisCall);

  var olgSvgMissCall = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.7188 16.7953C23.9063 16.9843 24 17.2205 24 17.5039C24 17.7874 23.9063 18.0236 23.7188 18.2126L21.2344 20.7165C21.0469 20.9055 20.8125 21 20.5313 21C20.25 21 20.0156 20.9055 19.8281 20.7165C18.9531 19.8976 18.0625 19.2677 17.1563 18.8268C16.7813 18.6693 16.5938 18.3701 16.5938 17.9291V14.811C15.1563 14.3386 13.625 14.1024 12 14.1024C10.375 14.1024 8.84375 14.3386 7.40625 14.811V17.9291C7.40625 18.4016 7.21875 18.7165 6.84375 18.874C5.84375 19.3465 4.95313 19.9606 4.17188 20.7165C3.98438 20.9055 3.75 21 3.46875 21C3.1875 21 2.95313 20.9055 2.76563 20.7165L0.28125 18.2126C0.09375 18.0236 0 17.7874 0 17.5039C0 17.2205 0.09375 16.9843 0.28125 16.7953C3.5625 13.6457 7.46875 12.0709 12 12.0709C13.875 12.0709 15.9531 12.5433 18.2344 13.4882C20.5156 14.4016 22.3438 15.5039 23.7188 16.7953ZM6.51563 5.50394V9.04724H5.01563V3H11.0156V4.51181H7.5L12 9.04724L18 3L18.9844 3.99213L12 11.0787L6.51563 5.50394Z" fill="white" fill-opacity="0.65"></path>
  </svg>`;
  $("#btnMissCall").html(olgSvgMissCall);

  var oldSvgContact = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.8594 14.0156C17.6094 13.3594 17.4844 12.6875 17.4844 12C17.4844 11.3125 17.6094 10.6406 17.8594 9.98438H19.5L21 8.01563L19.0313 6C18.4688 6.4375 17.9063 7.04688 17.3438 7.82813C16.8125 8.60938 16.4531 9.32813 16.2656 9.98438C16.0781 10.6406 15.9844 11.3125 15.9844 12C15.9844 12.6875 16.0781 13.3594 16.2656 14.0156C16.4531 14.6719 16.8125 15.3906 17.3438 16.1719C17.9063 16.9531 18.4688 17.5625 19.0313 18L21 15.9844L19.5 14.0156H17.8594ZM14.0156 18V17.0156C14.0156 16.1094 13.3281 15.375 11.9531 14.8125C10.5781 14.2188 9.26563 13.9219 8.01563 13.9219C6.76563 13.9219 5.45313 14.2188 4.07813 14.8125C2.70313 15.375 2.01563 16.1094 2.01563 17.0156V18H14.0156ZM10.125 6.89063C9.53125 6.29688 8.82813 6 8.01563 6C7.20313 6 6.5 6.29688 5.90625 6.89063C5.3125 7.48438 5.01563 8.1875 5.01563 9C5.01563 9.8125 5.3125 10.5156 5.90625 11.1094C6.5 11.7031 7.20313 12 8.01563 12C8.82813 12 9.53125 11.7031 10.125 11.1094C10.7188 10.5156 11.0156 9.8125 11.0156 9C11.0156 8.1875 10.7188 7.48438 10.125 6.89063ZM21.9844 3C22.5156 3 22.9844 3.20313 23.3906 3.60938C23.7969 4.01563 24 4.48438 24 5.01563V18.9844C24 19.5156 23.7969 19.9844 23.3906 20.3906C22.9844 20.7969 22.5156 21 21.9844 21H2.01563C1.48438 21 1.01563 20.7969 0.609375 20.3906C0.203125 19.9844 0 19.5156 0 18.9844V5.01563C0 4.48438 0.203125 4.01563 0.609375 3.60938C1.01563 3.20313 1.48438 3 2.01563 3H21.9844Z" fill="white" fill-opacity="0.65"></path>
  </svg>`;
  $("#btnContact").html(oldSvgContact);

  $("#callEnter").attr("disabled", true);
  $("#callEnter").css({ backgroundColor: "darkgray" });

  $("#output").text("");
  $("#appTextPhone1").text("Correct");
  $("#appTextPhone1").attr("class", "correct__number__phone");

  stop();

  $("#timerInboundListen").text("");
  $("#timerInboundListenCollapse").text("");

  $("#mainContent").css("display", "block");
  $("#mainListContacts").css("display", "none");
  $("#mainOutbound").css("display", "none");
  $("#mainBusyCall").css("display", "none");
  $("#mainCollapseClickToCall").css("display", "none");
  $("#mainListHistoryCall").css("display", "none");
  $("#mainListMissCall").css("display", "none");
  $("#mainInbound").css("display", "none");
  $("#mainInboundCollapse").css("display", "none");
  $("#mainInboundListen").css("display", "none");
  $("#mainInboundListenCollapse").css("display", "none");

  idContact = "";
  nameContact = "";
  phoneNumberReceiver = "";
  emailContact = "";

  isInboundCall = false;
  existContact = false;
  isMainActive = false;
  isMainContactActive = false;
  isMainOutbound = false;

  const labelMainListHistoryCall = document.querySelector(
    "#mainContent .appTxtService"
  );
  const dropdown = document.querySelector("#mainContent .dropdown--extend");

  if (labelMainListHistoryCall && dropdown) {
    labelMainListHistoryCall.textContent = appTxtService; // Thiết lập lại giá trị của label
    labelMainListHistoryCall.style.display = "inline";
    dropdown.style.display = "none";
  } else {
    console.error("Label or Dropdown element not found in mainListHistoryCall");
  }
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
  $("#mainOutbound").css("display", "block");
  $("#mainContent").css("display", "none");
  $("#mainListContacts").css("display", "none");
  $("#mainBusyCall").css("display", "none");
  $("#mainCollapseClickToCall").css("display", "none");
  $("#mainListHistoryCall").css("display", "none");
  $("#mainListMissCall").css("display", "none");
  $("#mainInbound").css("display", "none");
  $("#mainInboundCollapse").css("display", "none");
  $("#mainInboundListen").css("display", "none");
  $("#mainInboundListenCollapse").css("display", "none");

  $("#appTxtNameContact").val(nameContact);
  $("#appTxtNameContact").text(nameContact);

  $("#appTextPhone").val(sdt);
  $("#appTextPhone").text(sdt);

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
  debugger;
  actionEndCall = true;
  isMainOutbound = false;
  if (idTicket != null) {
    await insertIdTicketAs7(idTicket);
  }
  resizeAppDefault();
  client.interface
    .trigger("hide", { id: "softphone" })
    .then(function () {
      $("#headCourse").css("display", "block");
      $("#mainContent").css("display", "block");
      $("#mainOutbound").css("display", "none");
      $("#mainBusyCall").css("display", "none");
      $("#mainCollapseClickToCall").css("display", "none");
      $("#mainListContacts").css("display", "none");
      $("#mainListHistoryCall").css("display", "none");
      $("#mainListMissCall").css("display", "none");
      $("#mainInbound").css("display", "none");
      $("#mainInboundCollapse").css("display", "none");
      $("#mainInboundListen").css("display", "none");
      $("#mainInboundListenCollapse").css("display", "none");

      phoneNumberReceiver = $("#output").val("");
      $("#appTextPhone").val("");
      $("#appTextPhone").text("");

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
  $("#viewConnecting").css("display", "none");
  $("#displayConnect").css("display", "block");

  // Thiết lập giá trị cho thẻ <p>
  var showValueRole = document.getElementById("displayValueRoleAcct");
  showValueRole.textContent = $("#roleAcct").val();
  console.log("showValueRole", $("#roleAcct").val());

  var showValueExtension = document.getElementById("displayValueExtension");
  showValueExtension.textContent = displayExtension;
}

// async function goToOncallCX() {
//   document.getElementById("mainConnect").style.display = "none";
//   document.getElementById("mainContent").style.display = "block";

//   var showValueAppTxtService = document.querySelector("appTxtService");
//   showValueAppTxtService.innerText = appTxtService;
//   const label = document.querySelector("appTxtService");
//   label.textContent = appTxtService;

//   console.log("label.textContent", label.textContent);
// }

function capitalizeFirstLetter(string) {
  return string
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// document.querySelector(".appTxtService").addEventListener("click", function () {
//   const dropdown = document.querySelector(".dropdown--extend");
//   const label = document.querySelector(".appTxtService");
//   label.style.display = "none"; // Hide the label when clicked
//   dropdown.style.display = "block"; // Show the dropdown
// });

// document
//   .querySelector(".dropdown--extend")
//   .addEventListener("change", function () {
//     const dropdown = document.querySelector(".dropdown--extend");
//     const selectedOption = dropdown.options[dropdown.selectedIndex].text;
//     const label = document.querySelector(".appTxtService");
//     label.textContent = `SST-QC05 . ${selectedOption}`; // Update the label text
//     label.style.display = "inline"; // Show the label with the new text
//     dropdown.style.display = "none"; // Hide the dropdown after selection
//   });

// document
//   .querySelector(".dropdown--extend")
//   .addEventListener("mouseleave", function () {
//     const dropdown = document.querySelector(".dropdown--extend");
//     const label = document.querySelector(".appTxtService");
//     label.style.display = "inline"; // Show the label with the initial text
//     dropdown.style.display = "none"; // Hide the dropdown when mouse leaves
//   });

// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelectorAll(".appTxtService").forEach((label) => {
//     label.addEventListener("click", () => {
//       // Get the associated select element
//       debugger;
//       const select = label.nextElementSibling;
//       if (select && select.tagName === "SELECT") {
//         // Toggle the display of the select element
//         if (select.style.display === "none" || select.style.display === "") {
//           select.style.display = "inline";
//           label.style.display = "none";
//           // Focus on the select element to show the options
//           select.focus();
//         } else {
//           select.style.display = "none";
//           label.style.display = "inline";
//         }
//       }
//     });
//   });

//   document.querySelectorAll(".dropdown--extend").forEach((select) => {
//     select.addEventListener("change", () => {
//       // Hide the select element when an option is selected
//       select.style.display = "none";
//       // Show the label again
//       const label = select.previousElementSibling;
//       if (label && label.tagName === "LABEL") {
//         const selectedText = select.options[select.selectedIndex].text;
//         label.textContent = selectedText;
//         label.style.display = "inline";
//         appTxtService = selectedText;
//       }
//     });

//     // Optional: Hide the select and show the label again if the select loses focus without changing
//     select.addEventListener("mouseleave", () => {
//       // Hide the select element when it loses focus
//       select.style.display = "none";
//       // Show the label again
//       const label = select.previousElementSibling;
//       if (label && label.tagName === "LABEL") {
//         const selectedText = select.options[select.selectedIndex].text;
//         label.textContent = selectedText;
//         label.style.display = "inline";
//         appTxtService = selectedText;
//       }
//     });
//   });

//   document.addEventListener("DOMContentLoaded", function () {
//     const labelMainContent = document.querySelector(
//       "#mainContent .appTxtService"
//     );

//     if (labelMainContent) {
//       appTxtService = labelMainContent.textContent.trim(); // Lưu giá trị ban đầu của label
//     } else {
//       console.error("Label element not found in mainContent");
//     }

//     const label = document.querySelector(".appTxtService");
//     const dropdown = document.querySelector(".dropdown--extend");

//     if (label && dropdown) {
//       const selectedOption = dropdown.options[dropdown.selectedIndex].text;
//       label.textContent = `EXT ${selectedOption}`;
//       label.style.display = "inline";
//       appTxtService = label.textContent;
//       dropdown.style.display = "none";
//     } else {
//       console.error("Label or Dropdown element not found");
//     }
//   });
// });

// document
//   .getElementById("appTxtService")
//   .addEventListener("click", function () {
//     const dropdown = document.getElementById(".dropdown--extend");
//     const label = document.getElementById(".appTxtService");
//     label.style.display = "none"; // Hide the label when clicked
//     dropdown.style.display = "block"; // Show the dropdown
//   });

// document
//   .getElementById(".dropdown--extend")
//   .addEventListener("change", function () {
//     const dropdown = document.getElementById(".dropdown--extend");
//     const selectedOption = dropdown.options[dropdown.selectedIndex].text;
//     const label = document.getElementById(".appTxtService");
//     label.textContent = `SST-QC05 . ${selectedOption}`; // Update the label text
//     label.style.display = "inline"; // Show the label with the new text
//     dropdown.style.display = "none"; // Hide the dropdown after selection
//   });

// document
//   .getElementById(".dropdown--extend")
//   .addEventListener("mouseleave", function () {
//     const dropdown = document.getElementById(".dropdown--extend");
//     const label = document.getElementById(".appTxtService");
//     label.style.display = "inline"; // Show the label with the initial text
//     dropdown.style.display = "none"; // Hide the dropdown when mouse leaves
//   });

// document.addEventListener("DOMContentLoaded", function () {
//   const label = document.getElementById("appTxtService");
//   const dropdown = document.getElementById("dropdown--extend");

//   if (label && dropdown) {
//     label.addEventListener("click", function () {
//       label.style.display = "none"; // Hide the label when clicked
//       dropdown.style.display = "block"; // Show the dropdown
//     });

//     dropdown.addEventListener("change", function () {
//       const selectedOption = dropdown.options[dropdown.selectedIndex].text;
//       label.textContent = `SST-QC05 . ${selectedOption}`; // Update the label text
//       label.style.display = "inline"; // Show the label with the new text
//       dropdown.style.display = "none"; // Hide the dropdown after selection
//     });

//     dropdown.addEventListener("mouseleave", function () {
//       label.style.display = "inline"; // Show the label with the initial text
//       dropdown.style.display = "none"; // Hide the dropdown when mouse leaves
//     });
//   }
// });

function loadAndInsertHTML(url, targetId) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById(targetId).innerHTML = data;
    })
    .catch((error) => console.error("Error loading HTML:", error));
}

$(document).ready(function () {
  // Load và chèn nội dung từ các file HTML vào các vị trí tương ứng
  loadAndInsertHTML("dropDownExtendSST.html", "dropDownExtendSST");
  $("#mainCourse").css("display", "none");

  $("#appTextPhone1").text("Correct");
  $("#appTextPhone1").attr("class", "correct__number__phone");

  $("#btnClose").click(function () {
    closeApp();
  });

  // nhập enter search
  $("#search_contact").on("keypress", function (e) {
    const phone12 = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,5}$/;
    const phone = /^\d{10}$/;
    var inputData = $(this).val(); // Lấy giá trị từ ô input
    if (e.which == 13 && (inputData != "" || inputData != null)) {
      // Kiểm tra nếu phím Enter được nhấn
      if (inputData.match(phone) || inputData.match(phone12)) {
        filteredContactSearch(inputData);
      } else {
        searchContactKeyword(inputData);
      }
      // $(this).val(""); // Xóa nội dung trong ô input sau khi gửi
    } else if (e.which == 13 && (inputData == "" || inputData == null)) {
      current_page = 1;
      getContactData(current_page);
    }
  });
});

async function goToOncallCX() {
  $("#mainConnect").css("display", "none");
  $("#mainCourse").css("display", "block");
  $("#headCourse").css("display", "block");
  $("#mainContent").css("display", "block");

  $("#appTxtService").text(appTxtService);

  console.log("appTxtService:", appTxtService);
}

async function getIparamsFreshdesk() {
  try {
    const iparams = await client.iparams.get();
    console.log("iparams", iparams);
    return iparams || {};
  } catch (error) {
    console.error(error);
  }
}

async function getDomainName() {
  try {
    const data = await client.data.get("domainName");
    console.log("domainName", data);
    return data || null;
  } catch (error) {
    console.error(error);
  }
}

// function encryptData(data, secretKey) {
//   try {
//     return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
//   } catch (error) {
//     console.error(error);
//   }
// }

// function decryptData(data, secretKey) {
//   try {
//     var bytes = CryptoJS.AES.decrypt(data, secretKey);
//     var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

//     console.log("Decrypted data: ", decryptedData);
//   } catch (error) {
//     console.error(error);
//   }
// }

// async function getPosts() {
//   try {
//     var data = await client.request.invokeTemplate("getPosts", {
//       context: {},
//     });
//     console.log("gọi local 4000", data);
//   } catch (error) {
//     console.error("data getPost", error);
//   }
// }
