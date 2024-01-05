import './about.css'
const About = () =>{
    return(
    <>
        <head>
        <title>Multilayer perceptron</title>
        </head>
        <body className='body'>
        <article>
            <h1>Sample Article Title</h1>
            <p>
            A multilayer perceptron (MLP) is a misnomer for a modern feedforward artificial neural network, consisting of fully connected neurons with a nonlinear kind of activation function, organized in at least three layers, notable for being able to distinguish data that is not linearly separable. It is a misnomer because the original perceptron used a Heaviside step function, instead of a nonlinear kind of activation function (used by modern networks).   
            </p>
            <p>Modern feedforward networks are trained using the backpropagation method and are colloquially referred to as the "vanilla" neural networks.
            </p>
            <div className='container'>
                <div className='show'/>
            </div>
            <h2>Timeline</h2>
                <ul>
                    <li>
                    In 1958, a layered network of perceptrons, consisting of an input layer, a hidden layer with randomized weights that did not learn, and an output layer with learning connections, was introduced already by Frank Rosenblatt in his book Perceptron.[8][9][10] This extreme learning machine[11][10] was not yet a deep learning network.
                    </li>
                    <li> 
                    In 1970, modern backpropagation method, an efficient application of a chain-rule-based supervised learning,[15][16] was for the first time published by the Finnish researcher Seppo Linnainmaa.[2][17][10] The term (i.e. "back-propagating errors") itself has been used by Rosenblatt himself,[9] but he did not know how to implement it,[10] although a continuous precursor of backpropagation was already used in the context of control theory in 1960 by Henry J. Kelley.[3][10] It is known also as a reverse mode of automatic differentiation.
                    </li>
                    <li> 
                    In 1985, an experimental analysis of the technique was conducted by David E. Rumelhart et al..[6] Many improvements to the approach have been made in subsequent decades,[10].
                    </li>
                </ul>
        </article>


        <h7 className='soucrce'>From Wikipedia</h7>
        </body>

    </>

    )
}
export default About