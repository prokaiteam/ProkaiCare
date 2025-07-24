import React from 'react';

export const FloatingElements: React.FC = () => {
  const elements = [
    { size: 'w-8 h-8', position: 'top-[10%] left-[10%]', delay: '0s' },
    { size: 'w-6 h-6', position: 'top-[20%] right-[10%]', delay: '3s' },
    { size: 'w-10 h-10', position: 'bottom-[10%] left-[20%]', delay: '6s' },
    { size: 'w-7 h-7', position: 'bottom-[20%] right-[20%]', delay: '9s' },
    { size: 'w-12 h-12', position: 'top-1/2 left-1/2', delay: '12s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {elements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.size} ${element.position} gradient-primary rounded-full opacity-10 animate-float`}
          style={{ animationDelay: element.delay }}
        />
      ))}
    </div>
  );
};
