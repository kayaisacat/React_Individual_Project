import axios from 'axios'
import { useState, useEffect } from 'react'
import btoa from 'btoa'
const Photos = () => {
    const [data, setData] = useState()

    useEffect(()=>{
        axios.get('http://localhost:4000/photos').then((res)=>{

            // const base64 = btoa(
            //     new Uint8Array(res.data).reduce(
            //       (data, byte) => data + String.fromCharCode(byte),
            //       '',
            //     ),
            //   );
            // setData("data:;base64," + res.data);    
            console.log(res.data)
            console.log(res)


            setData(res.data)
            console.log(data)
            console.log(data.length)
        })
    })

    // const columns = _.times(16, (i) => (
    //     <Grid.Column key={i}>
    //       <Image src='/images/wireframe/image.png' />
    //     </Grid.Column>
    //   ))

    return (
        <div>
            {/* {data && data.length!=0 &&
                // <img src={`data:image/jpeg;base64, ${data}`}/>
                // <Grid>{columns}</Grid>
            } */}
        </div>
    )
}

export default Photos