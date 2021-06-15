import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Plotter from './Plotter';
import { getTasks } from './store/Actions'
const Tasks = (props) => {

  const { getTasks, data, loading, history } = props;

  useEffect(() => {
      getTasks()
  }, [])
   
    
    return (
        <div className="tc" >
        <div className="page-content fade-in-up pt-0">
          <div className="ibox">
            <div className="ibox-body" style={{marginTop:50}}>
              <div id="plotter" className="mt-0" >
              <Plotter
               
                loading={loading} data={data}
              />
            </div>
            </div>
          </div>
        </div>
        </div>
    )
  }


const mapStateToProps = state => ({
  loading: state.tasks.loading,
  data: state.tasks.data,
});

const mapDispatchToProps = dispatch => ({
  getTasks: () => dispatch(getTasks()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks); 