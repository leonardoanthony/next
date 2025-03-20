<<<<<<< HEAD
'use client';

export default function GlobalError() {
  return (
    <html>
      <body>
        <h1>Um erro ocorreu.</h1>
      </body>
    </html>
  );
}
=======
'use client'

export default  function GlobalError({error} : {error:Error}){
    return (
        
        <html>
            <body>
                <h1>Um erro ocorreu</h1>
                
            </body>
        </html>
    )
}
>>>>>>> aaa1d4d8790f52434e43bdad5afe2dc40f884fa4
