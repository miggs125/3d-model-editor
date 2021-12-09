import React  from 'react';

const ModelContext = React.createContext({
	colors: {},
	currColor: null,
	selected: null,
});

export default ModelContext;