import get from 'lodash/get';

export default function getOutputRows(args) {

  const {
    depreciationMode,
    depreciationPosting,
    acquisitionValue,
    years,
    percent,
  } = args;

  const outputRows = [];
  // console.log(Object.values(args).some(value => value === null));
  // console.log(args)

  if (Object.values(args).some(value => value === null)) return outputRows;

  for (let i = 1; i <= years; i++) {

    let currentDepreciationAmount =
      depreciationMode === 'linear'
        ? percent * acquisitionValue
        : percent * acquisitionValue * (1 - percent) ** (i - 1);

    let currentResidualValue =
      depreciationMode === 'linear'
        ? acquisitionValue - currentDepreciationAmount * i
        : acquisitionValue * (1 - percent) ** i;

    const lastResidualValue = get(
      outputRows,
      `${outputRows.length - 1}.residualValue`,
      acquisitionValue
    );
    
    if (lastResidualValue === 0) {
      
      break;
      
    } else if (currentResidualValue < 0) {
      
      currentDepreciationAmount = lastResidualValue;
      
      currentResidualValue = 0;
      
    }

    outputRows.push(
      depreciationPosting === 'direct'
        ? {
          year: i,
          depreciationAmount: currentDepreciationAmount,
          residualValue: currentResidualValue,
        }
        : {
          year: i,
          depreciationAmount: currentDepreciationAmount,
          residualValue: acquisitionValue,
          wbValue: (acquisitionValue - currentResidualValue),
        }
    );

  }

  return outputRows;
}