import {
  beforeAll,
  afterAll,
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
// import {screen, waitFor,cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../../app/home";
import { render,screen,waitFor,cleanup } from "../../utils/test-utils";
import { server } from "../../mocks/node";

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers(); 
  cleanup();
});
afterAll(() => server.close());

const mockedUseNavigate = vi.fn()

vi.mock("react-router-dom",async()=>{
  const actual = await vi.importActual("react-router-dom");
  return{
    ...actual,
    useNavigate : ()=> mockedUseNavigate,
  }
})

// vi.mock("../../api/researcher/signIn", () => ({
//   SignIn: vi.fn().mockResolvedValue({
//     success: true,
//   }),
// }));

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

describe("Home Researcher",  () => {
    beforeEach(()=>{
        mockedUseNavigate.mockReset();
    });

    it("renders the search input & list of companies" ,async () => {
        render(<Home />)

        expect(
            screen.getByLabelText("أكثر من 190 شركة بانتظارك ماذا تنتظر ابدأ الأن !")
        ).toBeInTheDocument()

        
        expect(
            await screen.findByText("مجموعة الشركات الموجودة")
        ).toBeInTheDocument()
        
    })

    it("Test search input with list of companies",async ()=>{
        // const user = userEvent.setup()

        render(<Home/>)

        // const searchInput = screen.getByLabelText("أكثر من 190 شركة بانتظارك ماذا تنتظر ابدأ الأن !");
        // const infoButton = screen.getAllByRole("button",{name:"قراءة المزيد"})[0]
          expect(
          await screen.findByText("Syriatel")
        ).toBeInTheDocument();
        

    })

    it("test 2 ", async()=>{
      const user = userEvent.setup()

        render(<Home/>)

        const searchInput = screen.getByLabelText("أكثر من 190 شركة بانتظارك ماذا تنتظر ابدأ الأن !");

        await user.click(searchInput);
        await user.type(searchInput,"Cham Bank")

        expect(
            await screen.findByText(/أول مصرف/i) // استخدام Regular Expression للبحث المرن
        ).toBeInTheDocument();

        await waitFor(()=>{
         expect(
              screen.queryByText("Syriatel")
            ).not.toBeInTheDocument();
        }) 

        // await user.click(searchInput);
        await user.clear(searchInput)

        expect(
          await screen.findByText("Syriatel")
        ).toBeInTheDocument();

        const cards = await screen.findAllByRole("button",{name:"قراءة المزيد"})

        expect(cards.length).toBeGreaterThan(5)
    })

    it("after click the button ==> SUCCESS navigate by value",async()=>{
      const user = userEvent.setup()

        render(<Home/>)
        const buttons = await screen.findAllByRole("button",{name:"قراءة المزيد"})
        await user.click(buttons[0])

        await waitFor(()=>{
          expect(mockedUseNavigate).toHaveBeenCalledWith(expect.stringContaining("/company/"))
        })
        
    })
})