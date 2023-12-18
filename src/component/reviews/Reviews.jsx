import React from 'react'

function Reviews() {
    // Creat Reviews
    const addReviews = async (ProudctId)=>{
        try{
            const token = localStorage.getItem("userToken");
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/products/${ProudctId}/review`, 
            {headers:{Authorization:`Wasan_${token}`}});
            return data;
       
        }
        catch(error){
            console.log(error);
        }
     }
     return (
        <>
          <Form.Label htmlFor="textReviews">Reviews</Form.Label>
          <Form.Control
            type="text"
            id="textReviews"
            aria-describedby="ReviewsHelpBlock"
          />
          <Form.Text id="ReviewsHelpBlock" muted>
            Write Reviews
          </Form.Text>
        </>
      );
    }
export default Reviews