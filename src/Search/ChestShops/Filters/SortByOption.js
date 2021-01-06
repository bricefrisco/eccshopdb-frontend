import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const SortByOptions = ({ sortBy, setSortBy }) => {
  const classes = useStyles();
  const materialClasses = useMaterialStyles();

  return (
    <div>
      <Typography className={classes.optionText}>Sort By</Typography>
      <FormControl classes={materialClasses}>
        <Select variant='outlined' value={sortBy} onChange={setSortBy}>
          <MenuItem value='best-price'>Best Price</MenuItem>
          <MenuItem value='quantity'>Quantity</MenuItem>
          <MenuItem value='quantity-available'>Quantity Available</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  optionText: {
    color: 'rgb(255, 170, 0)',
    fontSize: '14px',
    fontWeight: '500',
    marginTop: '20px',
    marginBottom: '5px',
  },
}));

const useMaterialStyles = makeStyles(() => ({
  root: {
    '& .MuiOutlinedInput-input': {
      padding: '10px 30px',
      paddingLeft: '8px',
      paddingRight: '80px',

      '@media (max-width: 1030px)': {
        paddingRight: '8px',
      },
    },

    '& .MuiSelect-root.MuiSelect-select': {
      backgroundColor: '#242526',
      width: '150px',
      color: 'rgba(255, 255, 255, 0.7)',

      '@media (max-width: 1030px)': {
        width: '100px',
      },
    },

    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: '#6ba65e',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#6ba65e',
      },
    },
  },
}));

export default SortByOptions;
