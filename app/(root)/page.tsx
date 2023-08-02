'use client';

import { Modal } from '@/components/ui/moda';
import { UserButton } from '@clerk/nextjs';

const SetupPage = ()  => {
  return (
    <div className='p-4'>
      <Modal onClose={() => {}} isOpen title='Modal Show' description='Learn Bitch!'>children</Modal>
    </div>
  );
}

export default SetupPage;
