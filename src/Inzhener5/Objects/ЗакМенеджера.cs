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
    /// Заказа_от_менеджера.
    /// </summary>
    // *** Start programmer edit section *** (ЗакМенеджера CustomAttributes)

    // *** End programmer edit section *** (ЗакМенеджера CustomAttributes)
    [AutoAltered()]
    [Caption("Заказа_от_менеджера")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗакМенеджераE", new string[] {
            "Операционная_система as \'Операционная_система\'",
            "Номер_заявки as \'Номер_заявки\'",
            "Дата as \'Дата\'",
            "Описание_проблемы as \'Описание_проблемы\'"})]
    [View("ЗакМенеджераL", new string[] {
            "Операционная_система as \'Операционная_система\'",
            "Номер_заявки as \'Номер_заявки\'",
            "Дата as \'Дата\'",
            "Описание_проблемы as \'Описание_проблемы\'"})]
    public class ЗакМенеджера : ICSSoft.STORMNET.DataObject
    {
        
        private string fОперационная_система;
        
        private string fДата;
        
        private int fНомер_заявки;
        
        private string fОписание_проблемы;
        
        // *** Start programmer edit section *** (ЗакМенеджера CustomMembers)

        // *** End programmer edit section *** (ЗакМенеджера CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (ЗакМенеджера.Дата CustomAttributes)

        // *** End programmer edit section *** (ЗакМенеджера.Дата CustomAttributes)
        [StrLen(255)]
        public virtual string Дата
        {
            get
            {
                // *** Start programmer edit section *** (ЗакМенеджера.Дата Get start)

                // *** End programmer edit section *** (ЗакМенеджера.Дата Get start)
                string result = this.fДата;
                // *** Start programmer edit section *** (ЗакМенеджера.Дата Get end)

                // *** End programmer edit section *** (ЗакМенеджера.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗакМенеджера.Дата Set start)

                // *** End programmer edit section *** (ЗакМенеджера.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (ЗакМенеджера.Дата Set end)

                // *** End programmer edit section *** (ЗакМенеджера.Дата Set end)
            }
        }
        
        /// <summary>
        /// Номер_заявки.
        /// </summary>
        // *** Start programmer edit section *** (ЗакМенеджера.Номер_заявки CustomAttributes)

        // *** End programmer edit section *** (ЗакМенеджера.Номер_заявки CustomAttributes)
        public virtual int Номер_заявки
        {
            get
            {
                // *** Start programmer edit section *** (ЗакМенеджера.Номер_заявки Get start)

                // *** End programmer edit section *** (ЗакМенеджера.Номер_заявки Get start)
                int result = this.fНомер_заявки;
                // *** Start programmer edit section *** (ЗакМенеджера.Номер_заявки Get end)

                // *** End programmer edit section *** (ЗакМенеджера.Номер_заявки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗакМенеджера.Номер_заявки Set start)

                // *** End programmer edit section *** (ЗакМенеджера.Номер_заявки Set start)
                this.fНомер_заявки = value;
                // *** Start programmer edit section *** (ЗакМенеджера.Номер_заявки Set end)

                // *** End programmer edit section *** (ЗакМенеджера.Номер_заявки Set end)
            }
        }
        
        /// <summary>
        /// Операционная_система.
        /// </summary>
        // *** Start programmer edit section *** (ЗакМенеджера.Операционная_система CustomAttributes)

        // *** End programmer edit section *** (ЗакМенеджера.Операционная_система CustomAttributes)
        [StrLen(255)]
        public virtual string Операционная_система
        {
            get
            {
                // *** Start programmer edit section *** (ЗакМенеджера.Операционная_система Get start)

                // *** End programmer edit section *** (ЗакМенеджера.Операционная_система Get start)
                string result = this.fОперационная_система;
                // *** Start programmer edit section *** (ЗакМенеджера.Операционная_система Get end)

                // *** End programmer edit section *** (ЗакМенеджера.Операционная_система Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗакМенеджера.Операционная_система Set start)

                // *** End programmer edit section *** (ЗакМенеджера.Операционная_система Set start)
                this.fОперационная_система = value;
                // *** Start programmer edit section *** (ЗакМенеджера.Операционная_система Set end)

                // *** End programmer edit section *** (ЗакМенеджера.Операционная_система Set end)
            }
        }
        
        /// <summary>
        /// Описание_проблемы.
        /// </summary>
        // *** Start programmer edit section *** (ЗакМенеджера.Описание_проблемы CustomAttributes)

        // *** End programmer edit section *** (ЗакМенеджера.Описание_проблемы CustomAttributes)
        [StrLen(255)]
        public virtual string Описание_проблемы
        {
            get
            {
                // *** Start programmer edit section *** (ЗакМенеджера.Описание_проблемы Get start)

                // *** End programmer edit section *** (ЗакМенеджера.Описание_проблемы Get start)
                string result = this.fОписание_проблемы;
                // *** Start programmer edit section *** (ЗакМенеджера.Описание_проблемы Get end)

                // *** End programmer edit section *** (ЗакМенеджера.Описание_проблемы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗакМенеджера.Описание_проблемы Set start)

                // *** End programmer edit section *** (ЗакМенеджера.Описание_проблемы Set start)
                this.fОписание_проблемы = value;
                // *** Start programmer edit section *** (ЗакМенеджера.Описание_проблемы Set end)

                // *** End programmer edit section *** (ЗакМенеджера.Описание_проблемы Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗакМенеджераE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗакМенеджераE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗакМенеджераE", typeof(IIS.Inzhener5.ЗакМенеджера));
                }
            }
            
            /// <summary>
            /// "ЗакМенеджераL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗакМенеджераL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗакМенеджераL", typeof(IIS.Inzhener5.ЗакМенеджера));
                }
            }
        }
    }
}
