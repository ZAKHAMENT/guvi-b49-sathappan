const userSchema = new mongoose.Schema({
    email: String,
    // ... other user-related fields
  });
  
  const User = mongoose.model("User", userSchema);
  