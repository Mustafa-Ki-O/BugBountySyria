// src/mocks/handlers.js
import { delay, http, HttpResponse } from 'msw'


const API_URL = import.meta.env.VITE_API_URL

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
          phone: "+963911111111",
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
]