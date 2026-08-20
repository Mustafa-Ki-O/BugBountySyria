// src/mocks/handlers.js
import { delay, http, HttpResponse } from 'msw'


const API_URL = import.meta.env.VITE_API_URL

let mockProducts = [
  {
    uuid: "prod-1",
    title: "Web Security Scanner",
    url: "https://example.com/scanner",
    description: "Automated vulnerability scanner for web applications."
  },
  {
    uuid: "prod-2",
    title: "API Gateway Protection",
    url: "https://example.com/api-gateway",
    description: "Security gateway to protect microservices and endpoints."
  }
];

const mockCompanies = [
  {
    uuid: "110e8400-e29b-41d4-a716-446655440001",
    name: "Syriatel",
    domain: "syriatel.sy",
    description: "شركة الاتصالات الرائدة في سوريا لخدمات الهاتف المحمول والإنترنت.",
    type: "Telecommunications",
    employess_count: "1000+",
    logo: "https://placehold.co/150x150?text=Syriatel"
  },
  {
    uuid: "110e8400-e29b-41d4-a716-446655440002",
    name: "MTN Syria",
    domain: "mtn.com.sy",
    description: "مزود خدمات اتصالات وشبكات متكاملة للقطاعين الفردي والمؤسساتي.",
    type: "Telecommunications",
    employess_count: "500-1000",
    logo: "https://placehold.co/150x150?text=MTN"
  },
  {
    uuid: "110e8400-e29b-41d4-a716-446655440003",
    name: "Commercial Bank of Syria",
    domain: "cbs-bank.sy",
    description: "المصرف التجاري السوري يقدم الخدمات المصرفية والمالية المختلفة.",
    type: "Banking & Finance",
    employess_count: "1000+",
    logo: "https://placehold.co/150x150?text=CBS"
  },
  {
    uuid: "110e8400-e29b-41d4-a716-446655440004",
    name: "Cham Bank",
    domain: "chambank.com",
    description: "أول مصرف إسلامي في سوريا يقدم حلولاً مصرفية متوافقة مع الشريعة.",
    type: "Banking & Finance",
    employess_count: "250-500",
    logo: "https://placehold.co/150x150?text=Cham+Bank"
  },
  {
    uuid: "110e8400-e29b-41d4-a716-446655440005",
    name: "Syrian Telecom (STE)",
    domain: "syriantelecom.com.sy",
    description: "الشركة السورية للاتصالات المسؤولة عن البنية التحتية للإنترنت والفيبر.",
    type: "Government / Telecom",
    employess_count: "1000+",
    logo: "https://placehold.co/150x150?text=STE"
  },
  {
    uuid: "110e8400-e29b-41d4-a716-446655440006",
    name: "Syriasoft",
    domain: "syriasoft.sy",
    description: "شركة تطوير برمجيات وحلول رقمية متخصصة في أنظمة الإدارة والـ ERP.",
    type: "Software Development",
    employess_count: "50-100",
    logo: "https://placehold.co/150x150?text=Syriasoft"
  },
  {
    uuid: "110e8400-e29b-41d4-a716-446655440007",
    name: "Aman Holding",
    domain: "aman-holding.sy",
    description: "مجموعة استثمارية تعمل في مجالات متعددة للتطوير والتجارة.",
    type: "Holding & Enterprise",
    employess_count: "100-250",
    logo: "https://placehold.co/150x150?text=Aman"
  },
  {
    uuid: "110e8400-e29b-41d4-a716-446655440008",
    name: "Al-Aqeelah Takaful Insurance",
    domain: "al-aqeelah.sy",
    description: "شركة تأمين تكافلي تقدم خدمات التأمين الصحي، السيارات، والتأمين الهندسي.",
    type: "Insurance",
    employess_count: "100-250",
    logo: "https://placehold.co/150x150?text=Al-Aqeelah"
  },
  {
    uuid: "110e8400-e29b-41d4-a716-446655440009",
    name: "Lattakia Port Company",
    domain: "lattakiaport.gov.sy",
    description: "الشركة المديرة لمرفأ اللاذقية والخدمات اللوجستية والشحن البحرية.",
    type: "Logistics & Maritime",
    employess_count: "500-1000",
    logo: "https://placehold.co/150x150?text=Port"
  },
  {
    uuid: "110e8400-e29b-41d4-a716-446655440010",
    name: "Apex Solutions",
    domain: "www.apexsolutions.team",
    description: "فريق تطوير واستشارات رقمية للحلول البرمجية المخصصة وأمن المعلومات.",
    type: "IT & Cybersecurity",
    employess_count: "10-50",
    logo: "https://placehold.co/150x150?text=Apex"
  }
]

export const handlers = [
  
  http.post(`${API_URL}/researcher/login`, async () => {
    await delay(500)
  return HttpResponse.json({
    status: "success",
      data: {
        token: "mock-jwt-token-123456789",
        researcher: {
          id: 1,
          uuid:34444444,
          name: "Mustafa Researcher",
          email: "mustafa@example.com",
          role: "researcher",
          image: "https://placehold.co/150x150/3182CE/FFFFFF?text=Researcher+Avatar", 
        }
      },
    
  }, { status: 200 })
}),


http.get(`${API_URL}/researcher/home`, async () => {
    await delay(300)

    return HttpResponse.json({
      status: "success",
      data: {
        companies: mockCompanies
      }
    }, { status: 200 })
  }),

    http.post(`${API_URL}/researcher/register`, async () => {
    await delay(500)
    return HttpResponse.json({
    status: "success",
    researcher:{
      data:{
      uuid:"34444444"
    }
    }
    
    
  }, { status: 200 })
}),

    http.post(`${API_URL}/researcher/register/:token`, async () => {
    await delay(500)
    return HttpResponse.json({
    status: "success",
    
  }, { status: 200 })
}),


  http.post(`${API_URL}/researcher/forgetPassword`, async () => {
    await delay(500)
    return HttpResponse.json({
    status: "success",
    
  }, { status: 200 })
}),


  http.post(`${API_URL}/researcher/validateOtp`, async () => {
    await delay(500)
    return HttpResponse.json({
    status: "success",
    
  }, { status: 200 })
}),


http.post(`${API_URL}/researcher/resetPassword`, async () => {
    await delay(500)
    return HttpResponse.json({
    status: "success",
    
  }, { status: 200 })
}),

http.post(`${API_URL}/researcher/profile`, async () => {
    await delay(500)
    return HttpResponse.json({
    status: "success",
    data:{
        researcher:{
          name: "أحمد محمد",
          email: "ahmed@example.com",
          phone: "+963911111111",
          code: "23323422",
          image: "https://placehold.co/150x150/3182CE/FFFFFF?text=Researcher+Avatar",
          description: "باحث في مجال البرمجيات وتقنيات الويب الحديثة."
        }
      }
  }, { status: 200 })
}),

http.get(`${API_URL}/researcher/profile`, async () => {
    await delay(500); 

    return HttpResponse.json({
      status: "success",
      data:{
        researcher:{
          name: "أحمد محمد",
          email: "ahmed@example.com",
          phone: "09111111",
          code: "23323422",
          image: "https://placehold.co/150x150/3182CE/FFFFFF?text=Researcher+Avatar",
          description: "باحث في مجال البرمجيات وتقنيات الويب الحديثة."
        }
      }
          }, { status: 200 });
  }),


  http.post(`${API_URL}/researcher/changePassword`, async () => {
    await delay(500)
    return HttpResponse.json({
    status: "success",
    
  }, { status: 200 })
}),



http.get(`${API_URL}/researcher/company/:id`, async () => {
  await delay(500);

  return HttpResponse.json({
    status: "success",
    data: {
      "company-data": {
        uuid: "comp-uuid-123",
        name: "تقنيات المستقبل للبرمجيات",
        logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
        description: "شركة رائدة في مجال الأمن السيبراني وتطوير حلول الويب المتقدمة.",
        type: "خاصة",
        domain: "cybersecurity.com",
        employess_count: "50-100",
        products: [
          {
            uuid: "prod-uuid-1",
            title: "منصة فحص الثغرات",
            url: "https://example.com/scanner",
            description: "منصة مخصصة لاكتشاف الثغرات البرمجية في تطبيقات الويب تلقائياً."
          },
          {
            uuid: "prod-uuid-2",
            title: "بوابة الدفع الآمنة",
            url: "https://example.com/secure-pay",
            description: "نظام دفع إلكتروني مشفر ومحمي بأعلى معايير الأمان العالمية."
          }
        ]
      }
    }
  }, { status: 200 });
}),

  http.post(`${API_URL}/researcher/add-reports-researcher`, async () => {
    await delay(500)
    return HttpResponse.json({
    status: "success",
    
  }, { status: 200 })
}),

http.get(`${API_URL}/researcher/reports-researcher`, async ({ request }) => {
    await delay(500);

    const url = new URL(request.url);
    const page = url.searchParams.get("page") || "1";

    return HttpResponse.json({
      status: "success",
      
      data:{
        total_pages: 3,
       current_page: Number(page),
       researchers: [
        {
          title: "SQL Injection Vulnerability",
          company_name: "Advanced Tech Company",
          created_at: "2026-06-01",
          file: "https://example.com/report1.pdf",
          status: "accept",
          rate: 8
        },
        {
          title: "IDOR Privilege Escalation",
          company_name: "Cybersecurity Platform",
          created_at: "2026-06-03",
          file: "https://example.com/report2.pdf",
          status: "reject",
          rate: 3
        },
        {
          title: "Cross-Site Scripting (XSS)",
          company_name: "Web Solutions Inc.",
          created_at: "2026-06-05",
          file: "https://example.com/report3.pdf",
          status: "pending",
          rate: 5
        }
      ]
      }
      
    }, { status: 200 });
  }),
// company

  http.post(`${API_URL}/company/login`, async () => {
    await delay(500)
    return HttpResponse.json({
    status: "success",
    data: {
        token: "mock-jwt-token-company-123456789",
        company: {
          id: 12,
          uuid:34655444,
          name: "Company",
          email: "company@example.com",
          role: "company",
          image: "https://placehold.co/150x150/3182CE/FFFFFF?text=Company+Avatar", 
        }
      },
  }, { status: 200 })
}),

  http.post(`${API_URL}/company/register`, async () => {
    await delay(500)
    return HttpResponse.json({
    status: "success",
    data: {
        token: "mock-jwt-token-company-123456789",
        company:{
        data:{
         uuid:"34655444"
         }
      },
    }
  }, { status: 200 })
}),


http.get(`${API_URL}/company/home`, async ({ request }) => {
  await delay(500);

  const url = new URL(request.url);
  const page = url.searchParams.get("page") || "1";

  return HttpResponse.json({
    status: "success",
    data:{
      total_pages: 3,
    current_page: Number(page),
   
    researchers: [
      {
        uuid: "res-1",
        name: "John Doe",
        points: 1500,
        description: "Senior Security Researcher and Bug Hunter.",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop"
      },
      {
        uuid: "res-2",
        name: "Jane Smith",
        points: 1200,
        description: "Penetration Tester & Web Security Expert.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
      }
    ],
   
    count_accept: 15,
    count_pending: 5,
    count_accept_percent: 75.0,
    count_pending_percent: 25.0
    }
    
  }, { status: 200 });
}),

http.get(`${API_URL}/company/researcher/:id`, async ({ params }) => {
    await delay(500);
    const { id } = params;

    return HttpResponse.json({
      status: "success",
      data: {
        researcher: {
          uuid: id,
          name: "John Doe",
          description: "Experienced security researcher specializing in web applications.",
          email: "john.doe@example.com",
          phone: "+1234567890",
          image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop",
          points: 3.5
        },
        accepted_reports: [
          {
            uuid: "rep-101",
            title: "Remote Code Execution (RCE)",
            created_at: "2026-06-10",
            rate: 9
          },
          {
            uuid: "rep-102",
            title: "Cross-Site Scripting (XSS)",
            created_at: "2026-06-12",
            rate: 7
          }
        ]
      }
    }, { status: 200 });
  }),

  http.get(`${API_URL}/company/all_report`, async ({ request }) => {
    await delay(500);

    const url = new URL(request.url);
    const page = url.searchParams.get("page") || "1";

    return HttpResponse.json({
      status: "success",
      data:{
        total_pages: 3,
      current_page: Number(page),
      reports: [
        {
          uuid: "rep-201",
          title: "SQL Injection Vulnerability",
          created_at: "2026-06-15",
          file: "https://example.com/report1.pdf",
          status: "accept",
          rate: 8,
          researcher: {
            name: "John Doe"
          }
        },
        {
          uuid: "rep-202",
          title: "IDOR Data Leak",
          created_at: "2026-06-18",
          file: "https://example.com/report2.pdf",
          status: "pending",
          rate: 5,
          researcher: {
            name: "Jane Smith"
          }
        },
        {
          uuid: "rep-203",
          title: "Cross-Site Scripting (XSS)",
          created_at: "2026-06-20",
          file: "https://example.com/report3.pdf",
          status: "reject",
          rate: 2,
          researcher: {
            name: "Alex Johnson"
          }
        }
      ]
      }
      
    }, { status: 200 });
  }),

  http.post(`${API_URL}/company/all_report/rate/:uuid`, async ({ params, request }) => {
    await delay(500);
    const { uuid } = params;
    
    const formData = await request.formData();
    const rate = formData.get("rate");

    return HttpResponse.json({
      status: "success",
      message: "Rating submitted successfully",
      data: {
        uuid: uuid,
        rate: Number(rate)
      }
    }, { status: 200 });
  }),

  http.get(`${API_URL}/company/profile`, async () => {
    await delay(500);

    return HttpResponse.json({
      status: "success",
      data: {
        company:{
        name: "Company Solutions",
        email: "contact@company.com",
        domain: "comapnyExample.com",
        type: "خاصة",
        employess_count: "50",
        description: "A leading tech services and web development startup.",
        logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
 
        }
      }
    }, { status: 200 });
  }),

 
  http.post(`${API_URL}/company/profile`, async ({ request }) => {
    await delay(500);

    const formData = await request.formData();
    const updatedData = {};
    for (const [key, value] of formData.entries()) {
      updatedData[key] = value;
    }

    return HttpResponse.json({
      status: "success",
      message: "Profile updated successfully",
      data: updatedData
    }, { status: 200 });
  }),

  http.get(`${API_URL}/company/all_product`, async ({ request }) => {
    await delay(500);
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page") || "1");

    return HttpResponse.json({
      status: "success",
      data:{
        total_pages: 2,
      current_page: page,
      products: mockProducts
      }
      
    }, { status: 200 });
  }),

  
  http.post(`${API_URL}/company/add_product`, async ({ request }) => {
    await delay(500);
    const formData = await request.formData();
    
    const newProduct = {
      uuid: "prod-" + Date.now(),
      title: formData.get("title"),
      url: formData.get("url"),
      description: formData.get("description")
    };

    mockProducts.unshift(newProduct);

    return HttpResponse.json({
      status: "success",
      message: "Product added successfully",
      data: newProduct
    }, { status: 201 });
  }),

 
  http.post(`${API_URL}/company/delete_product`, async ({ request }) => {
    await delay(500);
    const formData = await request.formData();
    const uuid = formData.get("uuid");

    mockProducts = mockProducts.filter((pro) => pro.uuid !== uuid);

    return HttpResponse.json({
      status: "success",
      message: "Product deleted successfully"
    }, { status: 200 });
  }),

  http.post(`${API_URL}/company/company/logout`, async () => {
    await delay(500);

    return HttpResponse.json({
      status: "success",
      message: "Logged out successfully"
    }, { status: 200 });
  }),
]