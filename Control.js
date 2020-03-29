const {
  FormLabel, FormControl, FormGroup, FormControlLabel, FormHelperText, Switch,
  Slider, Grid, Input, Select, MenuItem, TextField,
} = MaterialUI;
import {TEXT} from './text';

export function Control(props) {
  const {type, state, name, header, options = {}, handleState, stateObject, required} = props;
  const disabled = stateObject.active === false || (required && stateObject[required.name] !== required.value);

    switch(type) {
      case 'toggle':
        const handleSwitch = event => {
          handleState(name, event.target.checked);
        };
        return <Switch disabled={disabled} checked={state} onChange={handleSwitch} name={name} color="primary"/>
      break;
      case 'slider':
        const getTimeUnits = secs => {
          let [value, unit] = [secs, 'seconds'];
          if (secs >= 60*60*24) {
            value = Math.floor(secs/(60*60*24));
            unit = 'days';
          } else if (secs >= 60*60) {
            value = Math.floor(secs/(60*60));
            unit = 'hours';
          } else if (secs >= 60) {
            value = Math.floor(secs/60);
            unit = 'minutes';
          }

          return [value, unit];
        }
        const [defaultTime, defaultUnits] = getTimeUnits(state);
        const [value, setValue] = React.useState(defaultTime);
        const timeUnits = {
          seconds: {max: 59, multiplier: 1},
          minutes: {max: 59, multiplier: 60},
          hours: {max: 23, multiplier: 60*60},
          days: {max: 365, multiplier: 24*60*60},
        };
        const [unit, setUnit] = React.useState(defaultUnits);
        const handleTimeChange = (v = value, u = unit) => {
          let slider = v;
          if (v < 1) {
            slider = 1;
          } else if (v > timeUnits[u].max) {
            slider = timeUnits[u].max;
          }
          setValue(slider);
          handleState(name, slider*timeUnits[u].multiplier);
        }
        const handleInputChange = event => {
          handleTimeChange(event.target.value === '' ? '' : Number(event.target.value));
        };
        const handleSliderChange = (event, newValue) => {
          handleTimeChange(newValue);
        };
        
        const handleUnitChange = event => {
          setUnit(event.target.value);
          handleTimeChange(value, event.target.value);
        };
        return (
          <Grid container spacing={2} justify="flex-end" alignItems="center">
          <Grid item xs>
            <Slider
              disabled={disabled}
              value={typeof value === 'number' ? value : 0}
              onChange={handleSliderChange}
              step={1}
              min={1}
              max={timeUnits[unit].max}
              aria-labelledby="input-slider"
            />
          </Grid>
          <Grid item >
            <Input
             disabled={disabled}
              value={value}
              margin="dense"
              onChange={handleInputChange}
              style={{width: '42px'}}
              inputProps={{
                step: 1,
                min: 1,
                max: timeUnits[unit].max,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
            />
          </Grid>
            <Grid item>
            <Select id={`units-${state}`} disabled={disabled} value={unit} onChange={handleUnitChange} style={{minWidth: '60px'}}>
              {/*<MenuItem value={'seconds'}>{TEXT.SECONDS}</MenuItem>*/}
              <MenuItem value={'minutes'}>{TEXT.MINUTES}</MenuItem>
              <MenuItem value={'hours'}>{TEXT.HOURS}</MenuItem>
              {/*<MenuItem value={'days'}>{TEXT.DAYS}</MenuItem>*/}
            </Select>
            </Grid>
          </Grid>
        )
      break;
      case 'select':
        const [select, setSelect] = React.useState(state);
        const handleSelectChange = event => {
          setSelect(event.target.value);
          handleState(name, event.target.value)
        };
        return (
          <Select id={name} disabled={disabled} value={select} onChange={handleSelectChange}>
            {Object.entries(options).map(([val, label]) => (
              <MenuItem key={label} value={val}>{TEXT[label] || label}</MenuItem>
            ))}
          </Select>
        )
      break;
      case 'input':
        const [inputValue, setInputValue] = React.useState(state);
        const handleInputChange = event => {
          console.log(event.target.value)
          setInputValue(event.target.value);
          handleState(name, event.target.value)
        };
        return (
          <TextField id={name} disabled={disabled} value={inputValue} label={header} onChange={handleInputChange}/>
        );
      break;
      default: 
        return '';
    }
}