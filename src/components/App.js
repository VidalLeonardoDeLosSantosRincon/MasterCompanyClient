import React, {Fragment} from 'react';

//styles
import './App.css';

//components
import { Layout } from './main/Layout';
import { EmployeesList } from './EmployeesList';

export const App = () => {
	return (
		<Fragment>
			<div className="App">
				<Layout>
					<EmployeesList/>
				</Layout>
			</div>
		</Fragment>
	);
};

