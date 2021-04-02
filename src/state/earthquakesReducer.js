
export const earthquakesReducer = (state = {}, action) => {
    switch (action.type) {
        case "INIT": {
            return {
                ...action.payload
            };
        }
        case "SORT_BY_PLACE": {
            const { isAscending = false } = state;
            state.list.sort((a, b) => {
                if (isAscending) {
                    return a.place.localeCompare(b.place);
                }
                else {
                    return b.place.localeCompare(a.place);
                }
            });
            return {
                ...state,
                sortColumn: 'place',
                isAscending: !isAscending
            }
        }
        case "SORT_BY_MAG": {
            const { isAscending = false } = state;
            state.list.sort((a, b) => {
                if (isAscending) {
                    return a.mag - b.mag;
                }
                else {
                    return b.mag - a.mag;
                }
            });
            return {
                ...state,
                sortColumn: 'place',
                isAscending: !isAscending
            }
        }
        case "SORT_BY_TIME": {
            const { isAscending = false } = state;
            state.list.sort((a, b) => {
                if (isAscending) {
                    return a.time - b.time;
                }
                else {
                    return b.time - a.time;
                }
            });
            return {
                ...state,
                sortColumn: 'place',
                isAscending: !isAscending
            }
        }
        default:
            return state;
    }
};