import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Plus, Trash2 } from "lucide-react";

const RegistrationForm = () => {
  const location = useLocation();
  const eventName = location.state?.eventName || "Event";
  const entryFee = location.state?.entryFee || 0;

  const [members, setMembers] = useState([
    {
      name: "",
      mobile: "",
      email: "",
      aadhar: null,
      aadharName: "",
    }
  ]);
  
  const [errors, setErrors] = useState([{}]);

  const validate = () => {
    const newErrors = members.map(member => {
      const memberErrors = {};
      if (!member.name.trim()) memberErrors.name = "Name is required";
      if (!/^\d{10}$/.test(member.mobile)) memberErrors.mobile = "Enter a valid 10-digit mobile number";
      if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(member.email)) memberErrors.email = "Enter a valid email";
      if (!member.aadhar) memberErrors.aadhar = "Aadhar file is required";
      return memberErrors;
    });
    return newErrors;
  };

  const handleChange = (index, e) => {
    const { name, value, files } = e.target;
    const updatedMembers = [...members];
    
    if (name === "aadhar") {
      updatedMembers[index] = {
        ...updatedMembers[index],
        aadhar: files[0],
        aadharName: files[0]?.name || ""
      };
    } else {
      updatedMembers[index] = {
        ...updatedMembers[index],
        [name]: value
      };
    }
    
    setMembers(updatedMembers);
  };
  
  const addMember = () => {
    setMembers([...members, {
      name: "",
      mobile: "",
      email: "",
      aadhar: null,
      aadharName: ""
    }]);
    setErrors([...errors, {}]);
  };
  
  const removeMember = (index) => {
    if (members.length > 1) {
      const updatedMembers = [...members];
      updatedMembers.splice(index, 1);
      setMembers(updatedMembers);
      
      const updatedErrors = [...errors];
      updatedErrors.splice(index, 1);
      setErrors(updatedErrors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    
    const hasErrors = validationErrors.some(error => Object.keys(error).length > 0);
    
    if (!hasErrors) {
      alert("Registration submitted!");
      console.log("Form submitted with members:", members);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Navigation />
      <main className="flex-grow flex items-center justify-center pt-30 pb-12">
        <Card className="w-full max-w-2xl rounded-2xl shadow-lg p-0 mx-4">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-red-500 mb-6 text-center">
              Register for {eventName}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {members.map((member, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-5 relative">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-lg">Member {index + 1}</h3>
                    {members.length > 1 && (
                      <button 
                        type="button"
                        onClick={() => removeMember(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                  
                  <div className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium mb-1">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={member.name}
                        onChange={(e) => handleChange(index, e)}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter name"
                      />
                      {errors[index]?.name && (
                        <p className="text-red-500 text-xs mt-1">{errors[index].name}</p>
                      )}
                    </div>
                    
                    {/* Mobile */}
                    <div>
                      <label className="block text-sm font-medium mb-1">Mobile Number</label>
                      <input
                        type="tel"
                        name="mobile"
                        value={member.mobile}
                        onChange={(e) => handleChange(index, e)}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="10-digit mobile number"
                        maxLength={10}
                      />
                      {errors[index]?.mobile && (
                        <p className="text-red-500 text-xs mt-1">{errors[index].mobile}</p>
                      )}
                    </div>
                    
                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={member.email}
                        onChange={(e) => handleChange(index, e)}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="you@example.com"
                      />
                      {errors[index]?.email && (
                        <p className="text-red-500 text-xs mt-1">{errors[index].email}</p>
                      )}
                    </div>
                    
                    {/* Aadhar Upload */}
                    <div>
                      <label className="block text-sm font-medium mb-1">Upload Aadhaar</label>
                      <div className="flex items-center gap-3">
                        <label
                          htmlFor={`aadhar-upload-${index}`}
                          className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-primary/90 transition"
                        >
                          Choose File
                        </label>
                        <input
                          id={`aadhar-upload-${index}`}
                          type="file"
                          name="aadhar"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleChange(index, e)}
                          className="hidden"
                        />
                        <span className="text-xs text-gray-600">
                          {member.aadharName ? `Selected: ${member.aadharName}` : "No file chosen"}
                        </span>
                      </div>
                      {errors[index]?.aadhar && (
                        <p className="text-red-500 text-xs mt-1">{errors[index].aadhar}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Add Member Button */}
              <div className="flex justify-center">
                <Button 
                  type="button" 
                  onClick={addMember}
                  variant="outline"
                  className="border border-dashed border-gray-300 hover:border-red-500 text-gray-600 hover:text-red-500 rounded-lg px-4 py-2 flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Add Member
                </Button>
              </div>
              
              {/* Entry Fee Display */}
              <div className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-lg">
                <span className="font-medium text-gray-700">Total Entry Fee</span>
                <span className="font-semibold text-red-500 text-lg">
                  ₹{(entryFee * members.length).toLocaleString()}
                </span>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-primary/90"
              >
                Submit Registration
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default RegistrationForm;
