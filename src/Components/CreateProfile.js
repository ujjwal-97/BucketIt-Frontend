import Grid from '@material-ui/core/Grid';
import './createProfile.css';
function CreateProfile() {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <div className="container">
        <form>
          <div className="col25">
            <label htmlFor="companyName ">Company Name</label>
          </div>
          <div className="col75">
            <input type="text" id="companyName" />
          </div>
          <div className="col25">
            <label htmlFor="linkedinProfile ">LinkedIn Profile</label>
          </div>
          <div className="col75">
            <input type="text" id="linkedinProfile" />
          </div>
          <div className="col25">
            <label htmlFor="profession ">Profession</label>
          </div>
          <div className="col75">
            <input type="text" id="profession" />
          </div>
          <div className="col25">
            <label htmlFor="aboutme ">About Me (in 1000 characters)</label>
          </div>
          <div className="col75">
            <textarea></textarea>
          </div>
        </form>
      </div>
    </Grid>
  );
}
export default CreateProfile;
