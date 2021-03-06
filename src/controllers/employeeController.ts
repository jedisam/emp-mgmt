import Employee from '../models/employee'
import { Request, Response, NextFunction } from "express";



// export const getAllEmployees = getAll(Employee)
export const getAllEmployees = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const doc = await Employee.find({})
    
    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: {
        data: doc,
      },
    });
  } catch (error) {
    console.log("Get ALl EmP: ", error)
  }
  
  };

// export const addEmployee =createOne(Employee)
export const addEmployee = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newDoc = await Employee.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        data: newDoc,
      },
    });
  } catch (error) {
    console.log("ADD EmP: ", error)
    
  }
    
  };




// export const getEmployee = getOne(Employee)
export const getEmployee = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let query = Employee.findById(req.params.id);
    const doc = await query;
    if (!doc) {
        console.log('Noe')
    //   return next(new AppError('No Document Found with the given ID', 404));
    }
    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  } catch (error) {
    console.log('Get Sing Emp: ',error)
  }
   
  };

// export const updateEmployee = updateOne(Employee)

export const updateEmployee = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const doc = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
        console.log('Su')
    //   return next(new AppError('No Document Found with the given ID', 404));
    }
    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  } catch (error) {
    console.log('Update Emp: ', error)
  }
    
  };


// export const removeEmployee = deleteOne(Employee)
export const removeEmployee =  async (req: Request, res: Response, next: NextFunction) => {
  try {
    const doc = await Employee.findByIdAndDelete(req.params.id);
    if (!doc) {
    //   return next(new AppError('No Document Found with the given ID', 404));
    console.log('not found')
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    console.log('Remove EMp: ',error)
  }
    
  };