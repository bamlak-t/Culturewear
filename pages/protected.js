import { withPageAuthRequired } from '@auth0/nextjs-auth0';

function ProtectedPage({ user }) {
    return <div>Hello {user.name}</div>
}

export default withPageAuthRequired(ProtectedPage);