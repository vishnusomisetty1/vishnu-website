import React from 'react';
import NavBar from './NavBar';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const markdownContent = `
  I&apos;m 14 years old, and sometimes I feel like people don&apos;t see how hard I work or what I can do. 
  I feel small on my basketball team because I&apos;m short, and I think I could be smarter if I tried harder. 
  I like Boy Scouts, but not everyone trusts me there. I know I need to grow and get better, and I believe I can. 
  Even though people don&apos;t always notice what I&apos;ve done, I know what I&apos;ve achieved. I got higher ranks in Boy Scouts, 
  made my basketball team even though I&apos;m only 4&apos;11, and learned to speak Telugu. I need to stay positive but also face 
  my problems and not run away from them.
  \n
  Fear can slow me down. I worry about letting my parents down or not getting good grades. But I know I need to face 
  those fears. I can talk to my family or tutors if I need help, and I&apos;ll grow stronger by doing that. I want to grow by 
  learning new things. One thing I want to learn is coding. Even though I don&apos;t like it, I know it&apos;s important. I&apos;ll take 
  online classes and practice a lot. A MacBook could help me with this. I also want to do well in school and learn about 
  U.S. history by reading books and watching movies. This will help me understand things better.
  \n
  Who Am I? I don&apos;t even know the answer to that question. I definitely am not proud of what I have accomplished yet. 
  I honestly was never happy about myself in my entire life. I do not know why, when I made these videos and actually 
  finished the challenge, I have no idea why I felt like this was the first time I finished something and went through 
  the end with it. After finishing my last video and Harsha saying it was good, I felt a different kind of happiness, 
  feeling satisfaction and completion. With this, I also feel like I need to prove myself to everyone. I have no instances 
  where I feel like the people around me are actually proud of me. If I look into my memories, there is not one time in 
  my life where I feel like my family is proud of me. I want to have the ability to do this one day. After all the things 
  they have done for me, I need to prove who I really can be. This is a question that will take me years to answer, I need 
  to realize who I really am. I will one day make everyone proud that I am who I am. One thing I also dislike is everyone 
  worried about how I will become. Everyone being worried also makes me worried about myself and all of the people around 
  me. That is one of the goals I have, for everyone to stop worrying about how I am right now. Making these videos showed 
  me that there is nothing I need to worry about yet.
`;

// The rest of the code remains unchanged.


  return (
    <div className="text-center">
      <NavBar />
      <hr className="mt-4 mb-8" /> {/* Line under the navigation bar */}
      <h1 className="text-4xl mb-4">Reflecting on my Life so Far</h1> {/* Title */}
      <div className="max-w-xl mx-auto text-lg text-left">
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;



