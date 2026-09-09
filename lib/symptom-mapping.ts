export const symptomToSpecialties: Record<string, string[]> = {
  Headache: ["Neurology", "Cardiology"],
  Fever: ["Cardiology", "Pediatrics"],
  Cough: ["Cardiology", "Pediatrics"],
  "Sore Throat": ["Pediatrics", "Cardiology"],
  Fatigue: ["Cardiology", "Psychiatry"],
  Nausea: ["Cardiology", "Pediatrics"],
  Dizziness: ["Neurology", "Cardiology"],
  "Chest Pain": ["Cardiology", "Neurology"],
  "Shortness of Breath": ["Cardiology", "Neurology"],
  "Skin Rash": ["Dermatology", "Pediatrics"],
  "Joint Pain": ["Orthopedics", "Cardiology"],
  Insomnia: ["Psychiatry", "Neurology"],
}

export const symptomSeverity: Record<string, "low" | "medium" | "high"> = {
  Headache: "low",
  Fever: "medium",
  Cough: "low",
  "Sore Throat": "low",
  Fatigue: "low",
  Nausea: "medium",
  Dizziness: "medium",
  "Chest Pain": "high",
  "Shortness of Breath": "high",
  "Skin Rash": "low",
  "Joint Pain": "medium",
  Insomnia: "low",
}

export const severityAdvice: Record<string, string> = {
  low: "Your symptoms appear to be mild. Consider scheduling a consultation with a general practitioner.",
  medium: "Your symptoms may require professional attention. We recommend booking an appointment soon.",
  high: "Your symptoms may be serious. Please seek immediate medical attention or call emergency services if symptoms worsen.",
}
