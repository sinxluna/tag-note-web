export const UPDATE_DATA = 'data:updateData';

export function updateData(newData){
    console.log('called updateData');
    return {
      type: UPDATE_DATA,
        payload: {
            data: newData
        }
    }
}