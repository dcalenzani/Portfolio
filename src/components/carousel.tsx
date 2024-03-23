import React, { useRef } from 'react';
import Image from 'next/image';

const Carousel: React.FC = () => {

    return (
        <div id="Programming knowledge" className="space-y-20 w-full">
            <div id="Programming Languages" className="text-center justify-center items-center w-full">
                <h2 className="text-xl font-semibold shadow-bottom my-5 mb-10">Programming Languages</h2>
                <div className="flex overflow-x-auto w-full px-8 pb-2 md:justify-center">
                    <div className="flex-shrink-0 w-60 mx-2"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-plain.svg" alt="Bash" className="w-1/2 md:w-full max-w-xs mx-auto img-size" width={500} height={500}/><p>Bash</p></div>
                    <div className="flex-shrink-0 w-60 mx-2"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-1/2 md:w-full max-w-xs mx-auto img-size" width={500} height={500}/><p>C++</p></div>
                    <div className="flex-shrink-0 w-60 mx-2"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-1/2 md:w-full max-w-xs mx-auto img-size" width={500} height={500}/><p>JavaScript</p></div>
                    <div className="flex-shrink-0 w-60 mx-2"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="w-1/2 md:w-full max-w-xs mx-auto img-size" width={500} height={500}/><p>Python</p></div>
                </div>
            </div>
            <div id="Frameworks" className="text-center justify-center items-center w-full px-2">
                <h2 className="text-xl font-semibold shadow-bottom my-5 mb-10">Frameworks</h2>
                <div className="flex overflow-x-auto w-full px-6 pb-2 md:justify-center">
                    <div className="flex-shrink-0 w-60 mx-2">
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg" alt="Anaconda" className="w-1/2 md:w-full max-w-xs mx-auto img-size" width={500} height={500}/>
                        <p>Anaconda</p>
                    </div>
                    <div className="flex-shrink-0 w-60 mx-2">
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" alt="Arduino" className="w-1/2 md:w-full max-w-xs mx-auto img-size" width={500} height={500}/>
                        <p>Arduino</p>
                    </div>
                    <div className="flex-shrink-0 w-60 mx-2">
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="NextJS" className="w-1/2 md:w-full max-w-xs mx-auto img-size" width={500} height={500}/>
                        <p>NextJs</p>
                    </div>
                    <div className="flex-shrink-0 w-60 mx-2">
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="TailwindCSS" className="w-1/2 md:w-full max-w-xs mx-auto img-size" width={500} height={500}/>
                        <p>TailwindCSS</p>
                    </div>
                    <div className="flex-shrink-0 w-60 mx-2">
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="Typescript" className="w-1/2 md:w-full max-w-xs mx-auto img-size" width={500} height={500}/>
                        <p>Typescript</p>
                    </div>
                    <div className="flex-shrink-0 w-60 mx-2">
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="w-1/2 md:w-full max-w-xs mx-auto img-size" width={500} height={500}/>
                        <p>React</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;