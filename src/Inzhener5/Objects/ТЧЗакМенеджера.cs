﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Inzhener5
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Т ч зак менеджера.
    /// </summary>
    // *** Start programmer edit section *** (ТЧЗакМенеджера CustomAttributes)

    // *** End programmer edit section *** (ТЧЗакМенеджера CustomAttributes)
    [AutoAltered()]
    [Caption("Т ч зак менеджера")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТЧЗакМенеджераE", new string[] {
            "Действия_для_устранения_проблемы as \'Действия_для_устранения_проблемы\'"})]
    [View("ТЧЗакМенеджераL", new string[] {
            "Действия_для_устранения_проблемы as \'Действия_для_устранения_проблемы\'"})]
    public class ТЧЗакМенеджера : ICSSoft.STORMNET.DataObject
    {
        
        private string fДействия_для_устранения_проблемы;
        
        private IIS.Inzhener5.ЗакМенеджера fЗакМенеджера;
        
        // *** Start programmer edit section *** (ТЧЗакМенеджера CustomMembers)

        // *** End programmer edit section *** (ТЧЗакМенеджера CustomMembers)

        
        /// <summary>
        /// Действия_для_устранения_проблемы.
        /// </summary>
        // *** Start programmer edit section *** (ТЧЗакМенеджера.Действия_для_устранения_проблемы CustomAttributes)

        // *** End programmer edit section *** (ТЧЗакМенеджера.Действия_для_устранения_проблемы CustomAttributes)
        [StrLen(255)]
        public virtual string Действия_для_устранения_проблемы
        {
            get
            {
                // *** Start programmer edit section *** (ТЧЗакМенеджера.Действия_для_устранения_проблемы Get start)

                // *** End programmer edit section *** (ТЧЗакМенеджера.Действия_для_устранения_проблемы Get start)
                string result = this.fДействия_для_устранения_проблемы;
                // *** Start programmer edit section *** (ТЧЗакМенеджера.Действия_для_устранения_проблемы Get end)

                // *** End programmer edit section *** (ТЧЗакМенеджера.Действия_для_устранения_проблемы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧЗакМенеджера.Действия_для_устранения_проблемы Set start)

                // *** End programmer edit section *** (ТЧЗакМенеджера.Действия_для_устранения_проблемы Set start)
                this.fДействия_для_устранения_проблемы = value;
                // *** Start programmer edit section *** (ТЧЗакМенеджера.Действия_для_устранения_проблемы Set end)

                // *** End programmer edit section *** (ТЧЗакМенеджера.Действия_для_устранения_проблемы Set end)
            }
        }
        
        /// <summary>
        /// Т ч зак менеджера.
        /// </summary>
        // *** Start programmer edit section *** (ТЧЗакМенеджера.ЗакМенеджера CustomAttributes)

        // *** End programmer edit section *** (ТЧЗакМенеджера.ЗакМенеджера CustomAttributes)
        [PropertyStorage(new string[] {
                "ЗакМенеджера"})]
        [NotNull()]
        public virtual IIS.Inzhener5.ЗакМенеджера ЗакМенеджера
        {
            get
            {
                // *** Start programmer edit section *** (ТЧЗакМенеджера.ЗакМенеджера Get start)

                // *** End programmer edit section *** (ТЧЗакМенеджера.ЗакМенеджера Get start)
                IIS.Inzhener5.ЗакМенеджера result = this.fЗакМенеджера;
                // *** Start programmer edit section *** (ТЧЗакМенеджера.ЗакМенеджера Get end)

                // *** End programmer edit section *** (ТЧЗакМенеджера.ЗакМенеджера Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧЗакМенеджера.ЗакМенеджера Set start)

                // *** End programmer edit section *** (ТЧЗакМенеджера.ЗакМенеджера Set start)
                this.fЗакМенеджера = value;
                // *** Start programmer edit section *** (ТЧЗакМенеджера.ЗакМенеджера Set end)

                // *** End programmer edit section *** (ТЧЗакМенеджера.ЗакМенеджера Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТЧЗакМенеджераE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧЗакМенеджераE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧЗакМенеджераE", typeof(IIS.Inzhener5.ТЧЗакМенеджера));
                }
            }
            
            /// <summary>
            /// "ТЧЗакМенеджераL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧЗакМенеджераL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧЗакМенеджераL", typeof(IIS.Inzhener5.ТЧЗакМенеджера));
                }
            }
        }
    }
}
