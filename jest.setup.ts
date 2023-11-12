import { session } from './__tests__/Navigation.test';

jest.mock('next-auth/react', () => {
  const originalModule = jest.requireActual('next-auth/react');
  return {
    __esModule: true,
    ...originalModule,
    useSession: jest.fn(() => ({
      data: session,
      status: 'authenticated'
    }))
  };
});

jest.mock('next-auth/next', () => ({
  __esModule: true,
  default: jest.fn(),
  getServerSession: jest.fn(
    () =>
      new Promise(resolve => {
        resolve(session);
      })
  )
}));

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

jest.mock('@editorjs/editorjs', () => ({
  __esModule: true,
  default: jest.fn()
}));
