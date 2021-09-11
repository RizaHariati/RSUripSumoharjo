import React, { useState } from "react";
import { hak } from "../data/data_hak_kewajiban";

const HakKewajiban = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (id) => {
    if (selected === id) {
      return setSelected(null);
    } else {
      setSelected(id);
    }
  };
  return (
    <div>
      {hak.map((pasal) => {
        const { index, title, rules } = pasal;
        return (
          <div key={index} className="rules-container">
            <div className="rules">
              <div className="rules-header">
                <h3>{title}</h3>
              </div>
              <div className="rules">
                {rules.map((rule) => {
                  const { id, title, info } = rule;
                  return (
                    <div key={id} className="rule-container">
                      <div className="rule-header">
                        <h3>{title}</h3>
                        <button
                          onClick={() => {
                            toggle(id);
                          }}
                        >
                          <i
                            className={
                              selected === id ? `fa fa-minus` : `fa fa-plus`
                            }
                          ></i>
                        </button>
                      </div>
                      {selected === id && (
                        <ul className="rule-info">
                          {info.map((item, index) => {
                            return <li key={index}>{item}</li>;
                          })}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HakKewajiban;

// const HakKewajiban = () => {
//   return (
//     <div>
//       {hak.map((pasal) => {
//         const { index, title, rules } = pasal;
//         return (
//           <div key={index} className="rules-container">
//             <div className="rules">
//               <div className="rules-header">
//                 <h3>{title}</h3>
//               </div>
//               <div className="rules">
//                 {rules.map((rule) => {
//                   const { id } = rule;
//                   return <Rules key={id} {...rule} />;
//                 })}
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default HakKewajiban;

// export const Rules = ({ title, info }) => {
//   const [showRules, setShowRules] = useState(false);
//   return (
//     <div className="rule-container">
//       <div className="rule-header">
//         <h3>{title}</h3>
//         <button
//           onClick={() => {
//             setShowRules(!showRules);
//           }}
//         >
//           <i className={showRules ? `fa fa-minus` : `fa fa-plus`}></i>
//         </button>
//       </div>
//       {showRules && (
//         <ul className="rule-info">
//           {info.map((item, index) => {
//             return <li key={index}>{item}</li>;
//           })}
//         </ul>
//       )}
//     </div>
//   );
// };
