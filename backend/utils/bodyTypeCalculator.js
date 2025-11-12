// backend/utils/bodyTypeCalculator.js

export const calculateBodyType = (S, B, W, H) => {
  const max_upper = Math.max(S, B);
  const avg = (max_upper + H) / 2;
  
  // Quick Decision Rules
  // Inverted Triangle: Upper dominates hips
  if (max_upper >= H * 1.05 && W >= avg * 0.80) {
    return {
      type: "Inverted Triangle",
      description: "Shoulders/bust broader than hips",
      stylingTip: "Emphasize lower half with A-line skirts and wide-leg pants"
    };
  }
  
  // Pear: Hips dominate upper
  if (H >= max_upper * 1.05 && W <= H * 0.85 && W <= max_upper) {
    return {
      type: "Pear",
      description: "Hips broader than shoulders/bust",
      stylingTip: "Highlight shoulders and waist with structured tops"
    };
  }
  
  // Balanced body (Rectangle, Hourglass, Apple)
  if (Math.abs(max_upper - H) <= max_upper * 0.05) {
    // Hourglass: Defined waist
    if (W <= avg * 0.75) {
      return {
        type: "Hourglass",
        description: "Balanced upper and lower with defined waist",
        stylingTip: "Emphasize waist with belts and fitted styles"
      };
    }
    // Apple: Minimal waist definition
    else if (W >= avg * 0.90) {
      return {
        type: "Apple",
        description: "Weight concentrated around midsection",
        stylingTip: "Use structured pieces to define waistline"
      };
    }
    // Rectangle: Moderate waist
    else {
      return {
        type: "Rectangle",
        description: "Straight silhouette with minimal curves",
        stylingTip: "Create curves with layering and varied proportions"
      };
    }
  }
  
  return {
    type: "Rectangle",  // Default
    description: "Balanced proportions",
    stylingTip: "Versatile body type - most styles work well"
  };
};