
import LikeService from "../services/like_service.js"

const likeService = new LikeService();

export const toggleLike = async (req, res) => {
    try{

        const data = req.body;
        console.log(data);
        const response = await likeService.toggleLike(data.modelId,data.modelType,data.user);

        return res.status(201).json({
            success:true,
            message:'successfully toggled a Like',
            data:response,
            err:{}
        });


    }catch(error){
        return res.status(500).json({
            success:false,
            message:'Error toggled a Like',
            data:{},
            err:error
        });
    }

}
