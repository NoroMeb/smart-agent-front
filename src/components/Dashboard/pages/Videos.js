import Grid from '@mui/material/Grid';
import CommonButton from '../../common/commonButton/commonButton';
function Videos() {
    return (
        <Grid item xs={8} sx={{ backgroundColor: 'red' }}>
            This is Videos page.
            <CommonButton size={'large'}>Videos</CommonButton>
        </Grid>);
}

export default Videos;