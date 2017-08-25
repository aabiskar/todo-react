// export const addTodo = (list,item) => {
// 	return list.concat(item);
	
// }

export const addTodo = (list,item) => [...list,item];

export const generateId = () => Math.floor(Math.random() * 100000);	