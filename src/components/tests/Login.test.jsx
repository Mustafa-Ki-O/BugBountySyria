
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
import Login from "../../app/auth/Login";
import { render,screen,waitFor,cleanup } from "../../utils/test-utils";
import { server } from "../../mocks/node";

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers(); 
  cleanup();
});
afterAll(() => server.close());

// const { loginMock } = vi.hoisted(() => ({
//   loginMock: vi.fn(),
// }));

// vi.mock("../useMutation/researcher/useLogin", () => ({
//   default: () => ({
//     login: loginMock,
//     isPending: false,
//   }),
// }));

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

// function renderLogin() {
//   const queryClient = new QueryClient({
//     defaultOptions: {
//       queries: { retry: false },
//       mutations: { retry: false },
//     },
//   });
//   return render(
//     <QueryClientProvider client={queryClient}>
//       <MantineProvider>
//         <MemoryRouter>
//           <Login setProgress={vi.fn()} />
//           <Toaster />
//         </MemoryRouter>
//       </MantineProvider>
//     </QueryClientProvider>
//   );
// }

describe("Login form", () => {
//   afterEach(() => {
//   cleanup();
// });
beforeEach(() => {
    mockedUseNavigate.mockReset();
  });

  // beforeEach(() => {
  //   loginMock.mockReset();
  // });

  it("renders the email, password and login button", () => {
    render(<Login setProgress={vi.fn()} />)

    expect(
      screen.getByPlaceholderText("أدخل البريد الالكتروني *")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("أدخل كلمة المرور *")
    ).toBeInTheDocument();

    expect(
      screen.getAllByRole("button", { name: "تسجيل الدخول" }).length
    ).toBeGreaterThan(0);
  });

  it("does not call login when the email is invalid", async () => {
    const user = userEvent.setup();

    render(<Login setProgress={vi.fn()} />)

    const emailInputs = screen.getAllByPlaceholderText(
    "أدخل البريد الالكتروني *"
    );
    
    const passwordInputs = screen.getAllByPlaceholderText(
      "أدخل كلمة المرور *"
    );
    
    await user.type(emailInputs[0], "44ueooe.com");
    await user.type(passwordInputs[0], "password123");

    const loginButtons = screen.getAllByRole("button", {
      name: "تسجيل الدخول",
    });

    await user.click(loginButtons[0]);

    // await waitFor(() => {
    //   expect(SignIn).not.toHaveBeenCalled();
    // });
        expect(
      screen.queryByText("تم تسجيل الدخول بنجاح")
    ).not.toBeInTheDocument()
  });

    it("does not call login when the password is invalid", async () => {
    const user = userEvent.setup();

    render(<Login setProgress={vi.fn()} />)

    const emailInputs1 = screen.getAllByPlaceholderText(
    "أدخل البريد الالكتروني *"
    );
    
    const passwordInputs1 = screen.getAllByPlaceholderText(
      "أدخل كلمة المرور *"
    );
    
    await user.type(emailInputs1[0], "passdd@gmail.com");
    await user.type(passwordInputs1[0], "913");

    const loginButtons = screen.getAllByRole("button", {
      name: "تسجيل الدخول",
    });

    await user.click(loginButtons[0]);

    // await waitFor(() => {
    //   expect(SignIn).not.toHaveBeenCalled();
    // });
        expect(
     screen.queryByText("تم تسجيل الدخول بنجاح")
    ).not.toBeInTheDocument()
  });

  it("Call login function and detect the login notifaction",async()=>{
    const user = userEvent.setup()

    render(<Login setProgress={vi.fn()} />)

    const emailInput = screen.getAllByPlaceholderText("أدخل البريد الالكتروني *")
    const passwordInput = screen.getAllByPlaceholderText("أدخل كلمة المرور *")

    await user.type(emailInput[0],"uuu@gmail.com")
    await user.type(passwordInput[0],"kjskldkls020")

    const loginButtons = screen.getAllByRole("button",{name:"تسجيل الدخول"})

    await user.click(loginButtons[0])

    // await waitFor(()=>{
    //   expect(SignIn).toHaveBeenCalled()
    // })
    expect(
      await screen.findByText("تم تسجيل الدخول بنجاح")
    ).toBeInTheDocument()
  })

  it("navigates to researcher home after successful login", async () => {
  const user = userEvent.setup();

  render(<Login setProgress={vi.fn()} />)

  const emailInput = screen.getByPlaceholderText("أدخل البريد الالكتروني *");
  const passwordInput = screen.getByPlaceholderText("أدخل كلمة المرور *");

  await user.type(emailInput, "uuu@gmail.com");
  await user.type(passwordInput, "kjskldkls020");

  const loginButton = screen.getAllByRole("button", { name: "تسجيل الدخول" });
  await user.click(loginButton[0]);

  // التأكد من استدعاء التوجيه بالمسار المطلوب
  await waitFor(() => {
    expect(mockedUseNavigate).toHaveBeenCalledWith("/BugBountySyria/home"); 
  });
});

});
