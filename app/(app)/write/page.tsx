import type { Metadata } from 'next';
import { Suspense } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { WritingChecker } from '@/components/write/WritingChecker';

export const metadata: Metadata = { title: 'Viết' };

export default function Page({ searchParams }: PageProps<'/write'>) {
  return (
    <>
      <PageHeader title="Viết" />
      <Suspense fallback={null}>
        <Checker searchParams={searchParams} />
      </Suspense>
    </>
  );
}

async function Checker({ searchParams }: { searchParams: PageProps<'/write'>['searchParams'] }) {
  const params = await searchParams;
  const prompt = typeof params.prompt === 'string' ? params.prompt.slice(0, 500) : '';
  return <WritingChecker initialPrompt={prompt} />;
}
