import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import './pie.css'

const data = [
  {
    name: 'Week 1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Week 2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Week 3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Week 4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

export default function App() {
    return (
      <ResponsiveContainer width="200%"  aspect={3}>
     <div style={{height:"780px",width:"170px",border:"1px solid black",position:"absolute",left:"200px",backgroundColor:"dimgray",borderRadius:"20px"}}>


<div style={{position:"absolute",left:"800px"}}>
 <ol style={{display:"flex",flexDirection:"row"}}>
  <li style={{listStyleType:"none"}}><input type='text' placeholder='Search..'></input></li><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <li style={{listStyleType:"none"}}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWVJREFUSEvN1TFIlVEYxvGfuBkOitBQWgYKQkN7DYKKQ4uiiM6ubSm1qYMICo7i3BIi4ioqCgnuDgoOhkKgBIJB0BBUfPF9d/juPfc7V7noOz/n+T/nPe85p0Gdq6HO/moBjOFTGmgCmzHhYgBNmMQ8mlPTH5jDKn5VAxUB+vEZbQGT7xjFQQhSDTCMdTRiAyvYS4368A5D+I232KkECQEe4wyP8B7LgYQzmMUVuvAzrwsBljCFNYwXHOYWBkNBQoALdOAVjgoAA9jGIV7H7uBvKkz6/6cA0Ipr3KClVkDRlGV+WaAyfcgguCCwm4cFeIbzNGmtLXqOZEBKlTd4ii/oxDFexrw3OEEPvuINLrN1ecApuisJC0BP0mAv8sHygOyw2vEtMn0mq9jaEKBG7zJ5yTcP2EfvHd13kdzu/xU7JbdmxgI+YiFH+YDFInIsINElL+xIapj8D9PIhiLIiQUUBb0/wD/3oz4ZE6fqJQAAAABJRU5ErkJggg=="/></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <li style={{listStyleType:"none"}}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAfNJREFUSEu11UvoTVEUx/HPX/KIDMxEKAOKJMVIMZJHSuQxQClRIgYyQB5hJCmvwoBQYuQtJpLHTEIk72QqSXlEaP1bt+7/uOfe/z1192if09r7u/Zev/1bXTo8ujq8v1aA/liIWRhZSOYtbuAifpUl2gwwG0cxusUpX2M1bjeKKwPsxI5c8AHncQ2P898kzMNijMh/m7C/CGkEqG3+FctwBX9LTtEHi3ASA7EBB+tji4DI6jK+Ywqe9VIEU3EfAZyOe7V19YDBeIlhWI6zvdy8FrYRB/ACE2uFrwesxRE8x4Qm11LG7Yf3meB8XIrAesB1hHLWJajNA3SH78UWHMeaIuAjhmMMQuNVxjTcxSNMLgK+pRJCDT+q7I6h+ITPOe9xRSHLKPQQxLzKiLVfcn3MewCi+mNTAU+r7J7X8jCFMr4IOIel2Ix9FQHbsBtnsKIICO2fxiuMw582IX3xJk1xCS4UAVHcuKZwzZU41SZgfdpEPNZ4aD+LgPieiZsVrCJs5UFaxYyUand+jcxuK/akGsLsrjY5SXhPXMcJDEKc4nB9fJldb8euDHyXdh0v/QmiCYVCwg7CScO7wm3DSQ8Vk2nWcObiWL7uZuWIhrMKdxoFtWqZA7AAc7JwozLbUEvo/Va2zN9lGbQCtCmk/8M7DvgHFhFeGdAUSXAAAAAASUVORK5CYII="/></li>
 </ol>
  </div>

<div style={{position:"absolute",left:"250px"}}>
 <h1>Dashboard</h1>

<ol style={{display:"flex",flexDirection:"row",gap:"70px"}}>
  <li style={{height:"60px",width:"140px",borderRadius:"10px",padding:"5px",listStyleType:"none",backgroundColor:"lightgreen"}}><br></br><small>Total Revenues</small><br></br><b>$2,129,430</b></li>
  <li style={{height:"60px",width:"140px",borderRadius:"10px",padding:"5px",listStyleType:"none",backgroundColor:"lightyellow"}}><br></br><small>Total Transactions</small><br></br><b>$1,520</b></li>
  <li style={{height:"60px",width:"140px",borderRadius:"10px",padding:"5px",listStyleType:"none",backgroundColor:"lightcoral"}}><br></br><small>Total Likes</small><br></br><b>$9,721</b></li>
  <li style={{height:"60px",width:"140px",borderRadius:"10px",padding:"5px",listStyleType:"none",backgroundColor:"lightpink"}}><br></br><small>Total Users</small><br></br><b>$892</b></li>
</ol>

</div>




      <center><h1 style={{color:"white"}}>Board.</h1></center><br></br>
      
      <ol>
        <li style={{listStyleType:"none",color:"white"}}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAShJREFUSEvt1U0rBWEYxvHfKQsbpSgpFnY2iq0sLMRnULJQUja+CSslspLyGZTEhqy8rWwU5aVkpSQLek7P1JxpOnPGMbsz27mf63/fzz3XNTUVP7WK9eUBurGCNYy02MA91rGDr/SZLGAYhxhtUThbdotZPCcv0oAuXGACT3GKc7wVwPoxiW0M4ATTeYBVbOIV43gpOcUQbtCLeRyE8+kJrjGGBeyXFE/Kl+MkR5jJAj4RFjz4h+4TQNjhA97RlwX8xKp2P90GnbRYB5DsoXNFhQ6p9IqCmx/xgZ4qfLCEXZzFfGqIinZ9ELq/jA5exN5/TRDSdApbMU1PY5rWG85zcuEWmxRcYS4mcr0sDThO53hJyh024v1/N/ujldQtLm83OQsJlQN+AYtEPBlLPkKDAAAAAElFTkSuQmCC"/> Dashboard</li><br></br><br></br>
        <li style={{listStyleType:"none",color:"white"}}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJ5JREFUSEvtlFEKQEAQhj/nUEoeuI3LeHEDLuQgXryJcg8SW2yrlbGK7Os2/9f88894OH6eY32+BUiBAkiEtjVABlSzztaiAfCF4qq8BSIdMK6/0rnsdLZijwFucmmx39TBD1AOHFr0/hSpDlRs9aHbOjy9B84BV+N6uoPbAT0QXFXV6jog1Dd5PtclEAshNZCbzrVQ11xui5wY+n7ABBIrIBn7ufWCAAAAAElFTkSuQmCC"/> Transactions</li><br></br><br></br>
        <li style={{listStyleType:"none",color:"white"}}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAiVJREFUSEu11UnIT2EUx/HPKxkixc4QYkERUpQSVjIkmS1QSpKIhSyQIawkGUsSod5eC8kYZSHDTqZIZrKwUaQMETr1/Ou67uCl99n8b/d/nud7nnN+53ebtPFqauPz1QE6YhYmYTj64yde4g4u4hS+lSVaBZiMA+nQqos+xTJcKQoqA2zGprThNVpwHnfTuxGYhrnok96twc48pAjQOPwjFuBsKktRgu0wB0fQGauwJxuYB0RWZ/AZo/DgL0UwGjcQwPG43tiXBXTFY/TEQpwoODwaHKvo5quxC48wrNH4bOBy7MdDDC0pSxWgQ1JXJDgDp/OZXEAoZ0UCFVWnChDx27EOh7A0D3iD3hiI5yW1rwOMxTXcxsg84FNSQqjhSw0gBu5VQUwPvMN7dM8DQpbR6G6I56L1Ig1e/I5D3Dq7Yu+HtD+ef1NDdH9QUsD9EkCUMOTYLzV0DN5mYqMst5JQhuQBzZiPtdhRof+Y3KsYgCU4nIndgK04jkV5QGj/GJ5gMH5UQOIms7E7E9Mez9AX83AyD4jmRpkiYDGOVgCK/lqZbCKGNQbta9FETsSlf7CKsJWbySomJKmWjvx6bEtqCLM7V3GT8J4oRwxWF8Qt9mXjy+x6I7akwJBk2HVM+j2EJYSVTE9O2ivZSjjp3nwyVR+cqTiYpruqHfHBCTWFsv5YdZ/MTpiJKalxof+wi1BL6P1yMrXvZRnUAVoppNbf4L8BvwCWGm8ZQUtv1AAAAABJRU5ErkJggg=="/> Schedules</li><br></br><br></br>
        <li style={{listStyleType:"none",color:"white"}}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAlJJREFUSEu11UnojWEUBvDfn8wZFmahzFIiGzYoNpQhGxZCMmVjQ4aVLFBYsUAksZGQiGRBpiUpFDKTKcqQeero3Pp83ft3M7x16/u+933Pc87zPOfcBv95Nfzn+OoFmIz1GJwJXcNSHP9dgvUCPEbXUrBb6PcvAMbgdAaqJPQ932PvTGMg1SqYjtm4itZYnAHuoE8+30XvfN6MTxiE3dhfBCwDTMEhftHmI7ZjAx7k5V6pwQK0KASMyiLGkcq3IkB73EQnrENfjMckXKhBQ1B0ECdxGyvxPLV5HXeKAFMz+8sYVgoYAu/AyPx+HvMyWPFo3B2KcN3PKooAo3EKTbATUf63dM+lKi4KuiKRl2iaNM7FV4zFuTJAvC/E1kwpKIqy92AmDicFsb0JE7ANi9AfNxAaRGJR7c9VzUXv0ArN8AWP0B1d8CzvhZuiD+6nm0LoD3iLto25KPbCNc3z9xkP0QM98znOhIvu5Xt8b4n39QAUKYosw/u7MCcpWp7B1mJiahViR0eHA2PNr0VRUeS9qUfQFba9gs4lZ0VlIfILtEntQqsQOewbTvtFg2k4gIsYUQoWGlRsGs4Kh0S1T0vn4u7w7J2jZYAO6YRio43CMuyr0WgxVjbibGqyInsjHPimmoui2aIzy+46gSW4nkAxd7ZgXAm40VFROTsDsxAz/wlWJ8fBdcc89ArtMss16IaB9Qy7akwMSZGLFVfG9YCCe6qyWO8fTng+vF9cxfFdQ6LqnVztcIzg+MsM7mPFUFuFYzUj50a9Ffwuzl9X8McAPwCLF34ZnEyoSQAAAABJRU5ErkJggg=="/> Settings</li><br></br><br></br>
        <li style={{listStyleType:"none",color:"white"}}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZJJREFUSEu11L9L1WEUx/GXNAdKklHY0mCjU3+A2C+l0aSpv0AIDXSS2lSKGtpbU0eLRLPGVjdxaDH6JUahjYlx4DEu3+5zny/X7lmfcz7v8+s5XTpsXR3WVxdwCw9wKSX0AbN4VUqwDmAacxmh+3jcClICXMcqviJAa0nsGuZxDsPYyEFKgPUkMI6lishtLOI1RtoF/EA3TuNXReQM9vAZF9oFfMNZ9OJ7BhA+0aqmVmpR9Pwqoh3LmRbFjG62C2gccmxMzORUgi6g76RDjsQmEWIh3GiHCOjTk6zpcewAphDr+Rtv0/5v/4+PVtJo+d5qyLGekfUVDKZtahTbxSbep2oOmpFygNiK52mIdSqIv3AXb6rOzQCjeJkcV/AQcdx+VoKjwjh+8R4xYZFYrO1fqwJ6sJUyj1szUyd9PErt/ILL2D+OqwLu4QneYaimeLiFTnzKOHwTeJYDxEEbK32eDPhGOnwvcCcH2EE/olXVnpcKOo9P+IiLOcBReijdqBzsn/h2hUrVZLeodmBdx45X8Afl0EcZyvkojQAAAABJRU5ErkJggg=="/> Users</li><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <li style={{listStyleType:"none",color:"white"}}> Help</li><br></br><br></br>
        <li style={{listStyleType:"none",color:"white"}}>Contact Us</li><br></br><br></br>

      </ol>
    

      <div style={{position:"absolute",left:"320px",top:"500px"}}>
        {/* first bottom */}
      <div style={{height:"265px",width:"330px",backgroundColor:"whitesmoke"}}>
    <h4 style={{padding:"10px"}}>Top products</h4>  
        <ul>
          <p className='pie' style={{position:"absolute",top:"-220px",height:"100px",width:"100px",border:"1px solid black",backgroundColor:"wheat"}}></p>
          <li style={{listStyleType:"initial",position:"absolute",left:"200px"}}><b>Basic Tees</b><br></br>55%</li>
          <li style={{listStyleType:"initial",position:"absolute",left:"200px",top:"140px"}}><b>Custom Short Pants</b><br></br>31%</li>
          <li style={{listStyleType:"initial",position:"absolute",left:"200px",top:"220px"}}><b>Super Hoodies</b><br></br>14%</li>
        </ul>



{/* second bottom */}
        <div style={{height:"265px",width:"330px",backgroundColor:"whitesmoke",position:"absolute",left:"450px",top:"20px"}}>
<h4 style={{padding:"7px"}}><b>Today's Schedule</b></h4>
<ol>
  <li style={{height:"60px",width:"5px",backgroundColor:"lightgreen",position:"absolute",left:"25px",listStyleType:"none"}}></li>
  <li style={{height:"60px",width:"5px",backgroundColor:"purple",position:"absolute",left:"25px",top:"170px",listStyleType:"none"}}></li>

  <li style={{listStyleType:"none"}}><b style={{textIndent:"2em"}}>Mettings with Suppliers from Kutu Bali</b></li>
  <li style={{listStyleType:"none"}}>14.00-15.00</li>
  <li style={{listStyleType:"none"}}>at Sunset Road, Kuta, Buli</li><br></br><br></br>
  <li style={{listStyleType:"none"}}><b>Check operation at Giga Factory 1</b></li>
  <li style={{listStyleType:"none"}}>18.00-20.00</li>
  <li style={{listStyleType:"none"}}>at Central Jakarta</li>
</ol>
        </div>
        </div>



      </div>
  
    
        <LineChart style={{position:"absolute",left:"260px",top:"200px"}}
      
          width={900}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 40,
            left: 20,
            bottom: 5,
            
          }}
          
        >
          
      
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        </div>
       
        
     
        
      </ResponsiveContainer>




      
    );
  }

