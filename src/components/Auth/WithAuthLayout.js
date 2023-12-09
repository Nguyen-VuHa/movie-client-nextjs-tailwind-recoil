const { default: AuthLayout } = require("@/layouts/AuthLayout");

const withAuthLayout = (Component) => {
    const AuthenticatedLayout = () => (
      <AuthLayout>
        <Component />
      </AuthLayout>
    );
  
    // Perform authentication checks here before rendering the layout
  
    return AuthenticatedLayout;
};

export default withAuthLayout;