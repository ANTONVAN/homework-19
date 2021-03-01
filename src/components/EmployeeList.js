import React from "react";

	const useSortableData = (items, config = null) => {
	  const [sortConfig, setSortConfig] = React.useState(config);

	  const sortedItems = React.useMemo(() => {
	    let sortableItems = [...items];
	  	
	    if (sortConfig !== null) {
	      sortableItems.sort((a, b) => {
	        if (a[sortConfig.key] < b[sortConfig.key]) {
	          return sortConfig.direction === 'ascending' ? -1 : 1;
	        }
	        if (a[sortConfig.key] > b[sortConfig.key]) {
	          return sortConfig.direction === 'ascending' ? 1 : -1;
	        }
	        return 0;
	      });
	    }
	    return sortableItems;
	  }, [items, sortConfig]);

	  const requestSort = (key) => {
	    let direction = 'ascending';
	    if (
	      sortConfig &&
	      sortConfig.key === key &&
	      sortConfig.direction === 'ascending'
	    ) {
	      direction = 'descending';
	    }
	    setSortConfig({ key, direction });
	  };

	  return { items: sortedItems, requestSort, sortConfig };
	};


function EmployeeList(props) {

	  const { items, requestSort, sortConfig } = useSortableData(props.results);
	  const getClassNamesFor = (name) => {
	    if (!sortConfig) {
	      return;
	    }
	    return sortConfig.key === name ? sortConfig.direction : undefined;
	  };


  return (
  	<div>
	
	<table className="table">
	  <thead>
	    <tr>

	      <th scope="col">Image</th>
	      <th scope="col">
	          <button
	              type="button"
	              	onClick={() => requestSort('name')}
	              className={getClassNamesFor('name')}
	            >
	              Name
	            </button>
	      </th>
	      <th scope="col">
	      <button
	              type="button"
	                onClick={() => requestSort('phone')}
	              className={getClassNamesFor('phone')}
	            >
	              Phone
	            </button>
	      </th>
	      <th scope="col">
	      <button
	              type="button"
	              	onClick={() => requestSort('email')}
	              className={getClassNamesFor('email')}
	            >
	              Email
	            </button>
	      </th>
	      <th scope="col">
	      <button
	              type="button"
	                onClick={() => requestSort('dob')}
	              className={getClassNamesFor('dob')}
	            >
	      			DOB
	            </button>
	      
	      </th>
	    </tr>
	  </thead>
	  <tbody>
      	     
			{
				  items.map(result => (
					    	<tr key={result.name}>
						      <td>{result.name}</td>
						      <td>{result.name}</td>
						      <td>{result.phone}</td>
						      <td>{result.email}</td>
						      <td>{result.dob}</td>
					    	</tr>
							      )
							     )
			}

	  </tbody>
	</table>
	</div>

  );
}

export default EmployeeList;
