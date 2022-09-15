import { useState, useEffect } from 'react';
import allDigis from './digiData.json';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DigiWrapper from './DigiWrapper';
import './App.css';

interface Drop {
  id: string;
  name: string;

}

function App() {

  const [digis, setDigis] = useState<any>(allDigis)
  const [dropDown, setDrop] = useState<Drop[]>()
  const [selected, setSelected] = useState<any>();

  const handleChange = ({ key }: any) => {
    //console.log(key)
    console.log(digis[key])
    setSelected(digis[key])
    //setSelected(event.target.value as string);
  };


  useEffect(() => {

    //console.log(digis)
    const names = Object.keys(digis).map((keyName, i) => ({ id: digis[keyName].id, name: digis[keyName].name }))
    setDrop(names);
    //console.log(names);
  }, [])


  return (
    <div className="App">
      <Box className='sidebar'>

        {
          Object.keys(digis).map((key, i) => {
            return <Button className='list-item'
              onClick={() => { handleChange({ key }) }} >
              <img src={digis[key].icon} alt='icon' />
              <Box sx={{ paddingLeft: '20px' }}>{digis[key].name}</Box>
            </Button>
          })

        }


      </Box>
      <Box className='main'>


        {
          selected ?
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>

              <Box display='flex' width='50vw' justifyContent={selected?.neighBours?.prev.slice(1).length == 1 ? 'center' : 'space-between'} flexDirection='row' sx={{ paddingBottom: '10px' }}>
                {/* {selected?.neighBours?.prev.slice(1).map((lower: any) => <Box>{digis[lower].name}</Box>)} */}
                {selected?.neighBours?.prev.slice(1).map((lower: any) => <DigiWrapper digi={digis[lower]} />)}
              </Box>

              <DigiWrapper digi={selected} />

              {/* <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                <img height='32px' width='32px' src={selected?.icon} alt='icon' />
                <Box sx={{ fontWeight: 'bold' }}>{selected?.name}</Box>
              </Box> */}
              <Box display='flex' width='50vw' justifyContent='space-between' flexDirection='row' sx={{ paddingTop: '10px' }}>
                {selected?.neighBours?.next.map((higher: any) => <DigiWrapper digi={digis[higher]} />)}
              </Box>
            </Box>
            : <Box />
        }


      </Box>
      {/* <Box sx={{ width: 140 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Digimon</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selected}
            label="Digimon"
            onChange={handleChange}
          >
            {

              dropDown?.map((drop: Drop) => {
                return < MenuItem value={drop.id} > {drop.name}</MenuItem>
              })

            }

          </Select>
        </FormControl>
      </Box> */}

    </div >
  );
}

export default App;
