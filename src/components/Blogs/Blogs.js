import React from 'react';

const Blogs = () => {

    return (
        <div>
            <h1 className='text-3xl font-semibold text-cyan-500 my-20'>Simple Question and Answer</h1>
            <div className='w-3/5 bg-green-200 mx-auto my-5 p-3 rounded-md text-left'>
                <h5 className='text-lg font-semibold'>What is context API?</h5>
                <p>Ans: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                <p>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. </p>
            </div>
            <div className='w-3/5 bg-rose-200 mx-auto my-5 p-3 rounded-md text-left'>
                <h5 className='text-lg font-semibold'>What is semantic tag?</h5>
                <p>Ans: Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a 'p' tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.

                    On the flip side of this equation, tags such as 'b' and 'i' are not semantic. They define only how the text should look (bold or italic), and don't provide any additional meaning to the markup.</p>
            </div>
            <div className='w-3/5 bg-fuchsia-200 mx-auto my-5 p-3 rounded-md text-left'>
                <h5 className='text-lg font-semibold'>Inline vs Inline-Block vs Block</h5>
                <p>Ans:</p>
                <p><span className='font-semibold'>Inline:</span> Displays an element as an inline element. Any height and width properties will have no effect. The display property specifics the display behavior of an element. It’s a must know for controlling the layout of an element. There’s a bunch of property values. But let’s start off with the essential inline. Inline elements span, a, img.</p>
                <p><span className='font-semibold'>Inline-Block:</span> Displays an element as an inline-level block container. We CAN set height and width values. Alright, let's move on to inline-block. It’s essentially the same thing as inline, except that you can set height and width values.</p>
                <p><span className='font-semibold'>Block:</span> We talked about inline. Now let's switched to the opposite of it, block. Remember inline elements appears on the same line. Well, block starts on a NEW line and takes up the full width available. So that means block elements will occupy the entire width of its parent element. Block elements: div, h1, p, li, section.</p>
            </div>
        </div>
    );
};

export default Blogs;