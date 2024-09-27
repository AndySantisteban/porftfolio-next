import Grid from '../Grid'

const JwtProyect = () => {
    return (
        <>
            <>
                <h1>Package Test-and-convert-types</h1>
                <hr />
                <p>Stack:</p>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <img src={'https://img.icons8.com/color/50/000000/nodejs.png'} />
                    <img src={'https://img.icons8.com/color/50/000000/npm.png'} />
                    <img src={'https://img.icons8.com/color/50/000000/javascript.png'} />
                </div>
                <p>
                    Library that has two main functions:
                    <br />
                    Test the execution time of functions and Test according to the time requested by you in milliseconds. Decode and encondify binary, text, and numeric type data.
                </p>
                <p>
                    <b>Installation:</b>
                </p>
                <p>npm i test-and-convert-types</p>
                <p>
                    <b>Usage:</b>
                </p>
                <pre>{`
const { test } =
 require('test-and-convert-types');

// Test the execution time of a function
function helloworld(a, b) {
  console.log(a + b);
}
console.log(test.testTimeCount(helloworld));
// Output:
// 🕑:0.039
// Test the execution time of a function
 //with a parameter and validate the result

function helloworld(a, b) {
  console.log(a + b);
}

console.log(test.testTimeCheck
(helloworld, 0.1));
// Output:
// ✅ Test completed, great time

console.log(test.testTimeCheck
(helloworld, 0.004));
// Output:
// ❌ Failed Test, time exceeded to 
// 0.004 ms

// Compare the execution time with 
// other functions

function helloworld(a, b) {
  console.log(a + b);
}
function helloworld2(a, b) {
  console.log(a + b);
}

console.log(test.
testTimeFunctions
(helloworld, helloworld2));
// Output:
// Function primary with: 🕑 :0.035 ms
// , performs 
// better than function secondary with: 
// 🕑 :0.003 ms

// more functions visit the repository
            `}</pre>
                <p>
                    Visit:{' '}
                    <a href="https://www.npmjs.com/package/test-and-convert-types" target="_blank" rel="noopener noreferrer">
                        https://www.npmjs.com/package/ test-and-convert-types
                    </a>
                </p>

                <p>
                    <b>Project preview:</b>
                </p>
                <Grid>
                    <img src="/package1.png" alt="package1" width={'80%'} />
                    <img src="/package2.png" alt="package2" width={'80%'} />
                    <img src="/package3.png" alt="package3" width={'80%'} />
                    <img src="/package4.png" alt="package4" width={'80%'} />
                </Grid>
            </>
        </>
    )
}
export default JwtProyect
