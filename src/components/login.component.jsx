import {Link} from 'react-router-dom';
import './login.scss'


export function Login(){
    return(
      <>
      <div className='login '>
      <div class="container-fluid ">
          <div class="row justify-content-center  ">
              <div class="col-md-6">
                  <div class="card mt-5 p-5">
                      <div class="card-body ">
                          <h4 class="card-title text-right">My Facebook 2</h4>
                          <h6 class="card-text text-right">Hello! Let's get started</h6>
                          <p class="card-text text-right">Sign to continue.</p>
                          <form>
                              <div class="form-group mt-4">
                                  <input type="text" class="form-control" id="username" placeholder="Username"></input>
                              </div>
                              <div class="form-group mt-4">
                                  <div class="input-group">
                                      <input type="password" class="form-control" id="password" placeholder="Password"></input>
                                      {/* <div class="input-group-append">
                                          <span class="input-group-text">
                                              <i class="fa fa-eye"></i>
                                          </span>
    </div> */}
                                  </div>
                              </div>
                              
                              <div class="d-grid gap-2 mt-3">
                                   <button type="button" class="btn btn-danger btn-block" >SIGN IN</button>
                              </div>

                              <div class="row">
                              <div class="form-group form-check p-5 mt-3 col-6">
                                  <input type="checkbox" class="form-check-input" id="rememberMe"></input>
                                  <label class="form-check-label" for="rememberMe">Keep me signed in</label>
                              </div>
                                <div class="text-right mt-3  p-5  col-6">
                                  <Link to="#">Forgot password?</Link>
                                </div>
                              
                              </div>
                              
                              <div class="text-center ">
                                  Don't have an account? <Link to="#">Create one</Link>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </div>
      </>
    )
  }
  