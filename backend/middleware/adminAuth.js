import jwt from 'jsonwebtoken'

const adminAuth = async (req, res, next) => {

   const { token } = req.header;
   if (!token) {
      return res.json({
         success: false,
         message: "Not Authorised login admin"
      })
   }
   try {

      const token_decode = jwt.verify(token, process.env.JWT_SECRET);

      if (token_decode.role !== "admin") {
         return res.json({
            success: false,
            message: "Un Authorized access"
         })
      }

      next();

   } catch (error) {
      console.log(error);
   }

}

export default adminAuth