import { trpc } from '../utils/trpc';

export default function IndexPage() {
  const hello = trpc.hello.useQuery({ text: 'client' });
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p className='text-2xl underline font-bold text-center'>{hello.data.greeting}</p>
    </div>
  );
}