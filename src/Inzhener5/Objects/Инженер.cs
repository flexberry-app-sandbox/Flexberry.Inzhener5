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
    /// Инженер.
    /// </summary>
    // *** Start programmer edit section *** (Инженер CustomAttributes)

    // *** End programmer edit section *** (Инженер CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ИнженерE", new string[] {
            "Описание_продукта as \'Описание_продукта\'",
            "Дата_производства as \'Дата_производства\'",
            "Сертификация_и_стандарты as \'Сертификация_и_стандарты\'",
            "Экологичность_продукта as \'Экологичность_продукта\'",
            "Серия_и_номер_партии as \'Серия_и_номер_партии\'",
            "Гарантии_производителя as \'Гарантии_производителя\'",
            "Производитель as \'Производитель\'",
            "Инструкция_по_использованию as \'Инструкция_по_использованию\'"})]
    [View("ИнженерL", new string[] {
            "Описание_продукта as \'Описание_продукта\'",
            "Дата_производства as \'Дата_производства\'",
            "Сертификация_и_стандарты as \'Сертификация_и_стандарты\'",
            "Экологичность_продукта as \'Экологичность_продукта\'",
            "Серия_и_номер_партии as \'Серия_и_номер_партии\'",
            "Гарантии_производителя as \'Гарантии_производителя\'",
            "Производитель as \'Производитель\'",
            "Инструкция_по_использованию as \'Инструкция_по_использованию\'"})]
    public class Инженер : ICSSoft.STORMNET.DataObject
    {
        
        private string fСертификация_и_стандарты;
        
        private string fОписание_продукта;
        
        private string fДата_производства;
        
        private string fЭкологичность_продукта;
        
        private int fСерия_и_номер_партии;
        
        private string fГарантии_производителя;
        
        private string fПроизводитель;
        
        private string fИнструкция_по_использованию;
        
        // *** Start programmer edit section *** (Инженер CustomMembers)

        // *** End programmer edit section *** (Инженер CustomMembers)

        
        /// <summary>
        /// Гарантии_производителя.
        /// </summary>
        // *** Start programmer edit section *** (Инженер.Гарантии_производителя CustomAttributes)

        // *** End programmer edit section *** (Инженер.Гарантии_производителя CustomAttributes)
        [StrLen(255)]
        public virtual string Гарантии_производителя
        {
            get
            {
                // *** Start programmer edit section *** (Инженер.Гарантии_производителя Get start)

                // *** End programmer edit section *** (Инженер.Гарантии_производителя Get start)
                string result = this.fГарантии_производителя;
                // *** Start programmer edit section *** (Инженер.Гарантии_производителя Get end)

                // *** End programmer edit section *** (Инженер.Гарантии_производителя Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Инженер.Гарантии_производителя Set start)

                // *** End programmer edit section *** (Инженер.Гарантии_производителя Set start)
                this.fГарантии_производителя = value;
                // *** Start programmer edit section *** (Инженер.Гарантии_производителя Set end)

                // *** End programmer edit section *** (Инженер.Гарантии_производителя Set end)
            }
        }
        
        /// <summary>
        /// Дата_производства.
        /// </summary>
        // *** Start programmer edit section *** (Инженер.Дата_производства CustomAttributes)

        // *** End programmer edit section *** (Инженер.Дата_производства CustomAttributes)
        [StrLen(255)]
        public virtual string Дата_производства
        {
            get
            {
                // *** Start programmer edit section *** (Инженер.Дата_производства Get start)

                // *** End programmer edit section *** (Инженер.Дата_производства Get start)
                string result = this.fДата_производства;
                // *** Start programmer edit section *** (Инженер.Дата_производства Get end)

                // *** End programmer edit section *** (Инженер.Дата_производства Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Инженер.Дата_производства Set start)

                // *** End programmer edit section *** (Инженер.Дата_производства Set start)
                this.fДата_производства = value;
                // *** Start programmer edit section *** (Инженер.Дата_производства Set end)

                // *** End programmer edit section *** (Инженер.Дата_производства Set end)
            }
        }
        
        /// <summary>
        /// Инструкция_по_использованию.
        /// </summary>
        // *** Start programmer edit section *** (Инженер.Инструкция_по_использованию CustomAttributes)

        // *** End programmer edit section *** (Инженер.Инструкция_по_использованию CustomAttributes)
        [StrLen(255)]
        public virtual string Инструкция_по_использованию
        {
            get
            {
                // *** Start programmer edit section *** (Инженер.Инструкция_по_использованию Get start)

                // *** End programmer edit section *** (Инженер.Инструкция_по_использованию Get start)
                string result = this.fИнструкция_по_использованию;
                // *** Start programmer edit section *** (Инженер.Инструкция_по_использованию Get end)

                // *** End programmer edit section *** (Инженер.Инструкция_по_использованию Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Инженер.Инструкция_по_использованию Set start)

                // *** End programmer edit section *** (Инженер.Инструкция_по_использованию Set start)
                this.fИнструкция_по_использованию = value;
                // *** Start programmer edit section *** (Инженер.Инструкция_по_использованию Set end)

                // *** End programmer edit section *** (Инженер.Инструкция_по_использованию Set end)
            }
        }
        
        /// <summary>
        /// Описание_продукта.
        /// </summary>
        // *** Start programmer edit section *** (Инженер.Описание_продукта CustomAttributes)

        // *** End programmer edit section *** (Инженер.Описание_продукта CustomAttributes)
        [StrLen(255)]
        public virtual string Описание_продукта
        {
            get
            {
                // *** Start programmer edit section *** (Инженер.Описание_продукта Get start)

                // *** End programmer edit section *** (Инженер.Описание_продукта Get start)
                string result = this.fОписание_продукта;
                // *** Start programmer edit section *** (Инженер.Описание_продукта Get end)

                // *** End programmer edit section *** (Инженер.Описание_продукта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Инженер.Описание_продукта Set start)

                // *** End programmer edit section *** (Инженер.Описание_продукта Set start)
                this.fОписание_продукта = value;
                // *** Start programmer edit section *** (Инженер.Описание_продукта Set end)

                // *** End programmer edit section *** (Инженер.Описание_продукта Set end)
            }
        }
        
        /// <summary>
        /// Производитель.
        /// </summary>
        // *** Start programmer edit section *** (Инженер.Производитель CustomAttributes)

        // *** End programmer edit section *** (Инженер.Производитель CustomAttributes)
        [StrLen(255)]
        public virtual string Производитель
        {
            get
            {
                // *** Start programmer edit section *** (Инженер.Производитель Get start)

                // *** End programmer edit section *** (Инженер.Производитель Get start)
                string result = this.fПроизводитель;
                // *** Start programmer edit section *** (Инженер.Производитель Get end)

                // *** End programmer edit section *** (Инженер.Производитель Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Инженер.Производитель Set start)

                // *** End programmer edit section *** (Инженер.Производитель Set start)
                this.fПроизводитель = value;
                // *** Start programmer edit section *** (Инженер.Производитель Set end)

                // *** End programmer edit section *** (Инженер.Производитель Set end)
            }
        }
        
        /// <summary>
        /// Серия_и_номер_партии.
        /// </summary>
        // *** Start programmer edit section *** (Инженер.Серия_и_номер_партии CustomAttributes)

        // *** End programmer edit section *** (Инженер.Серия_и_номер_партии CustomAttributes)
        public virtual int Серия_и_номер_партии
        {
            get
            {
                // *** Start programmer edit section *** (Инженер.Серия_и_номер_партии Get start)

                // *** End programmer edit section *** (Инженер.Серия_и_номер_партии Get start)
                int result = this.fСерия_и_номер_партии;
                // *** Start programmer edit section *** (Инженер.Серия_и_номер_партии Get end)

                // *** End programmer edit section *** (Инженер.Серия_и_номер_партии Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Инженер.Серия_и_номер_партии Set start)

                // *** End programmer edit section *** (Инженер.Серия_и_номер_партии Set start)
                this.fСерия_и_номер_партии = value;
                // *** Start programmer edit section *** (Инженер.Серия_и_номер_партии Set end)

                // *** End programmer edit section *** (Инженер.Серия_и_номер_партии Set end)
            }
        }
        
        /// <summary>
        /// Сертификация_и_стандарты.
        /// </summary>
        // *** Start programmer edit section *** (Инженер.Сертификация_и_стандарты CustomAttributes)

        // *** End programmer edit section *** (Инженер.Сертификация_и_стандарты CustomAttributes)
        [StrLen(255)]
        public virtual string Сертификация_и_стандарты
        {
            get
            {
                // *** Start programmer edit section *** (Инженер.Сертификация_и_стандарты Get start)

                // *** End programmer edit section *** (Инженер.Сертификация_и_стандарты Get start)
                string result = this.fСертификация_и_стандарты;
                // *** Start programmer edit section *** (Инженер.Сертификация_и_стандарты Get end)

                // *** End programmer edit section *** (Инженер.Сертификация_и_стандарты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Инженер.Сертификация_и_стандарты Set start)

                // *** End programmer edit section *** (Инженер.Сертификация_и_стандарты Set start)
                this.fСертификация_и_стандарты = value;
                // *** Start programmer edit section *** (Инженер.Сертификация_и_стандарты Set end)

                // *** End programmer edit section *** (Инженер.Сертификация_и_стандарты Set end)
            }
        }
        
        /// <summary>
        /// Экологичность_продукта.
        /// </summary>
        // *** Start programmer edit section *** (Инженер.Экологичность_продукта CustomAttributes)

        // *** End programmer edit section *** (Инженер.Экологичность_продукта CustomAttributes)
        [StrLen(255)]
        public virtual string Экологичность_продукта
        {
            get
            {
                // *** Start programmer edit section *** (Инженер.Экологичность_продукта Get start)

                // *** End programmer edit section *** (Инженер.Экологичность_продукта Get start)
                string result = this.fЭкологичность_продукта;
                // *** Start programmer edit section *** (Инженер.Экологичность_продукта Get end)

                // *** End programmer edit section *** (Инженер.Экологичность_продукта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Инженер.Экологичность_продукта Set start)

                // *** End programmer edit section *** (Инженер.Экологичность_продукта Set start)
                this.fЭкологичность_продукта = value;
                // *** Start programmer edit section *** (Инженер.Экологичность_продукта Set end)

                // *** End programmer edit section *** (Инженер.Экологичность_продукта Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ИнженерE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ИнженерE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ИнженерE", typeof(IIS.Inzhener5.Инженер));
                }
            }
            
            /// <summary>
            /// "ИнженерL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ИнженерL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ИнженерL", typeof(IIS.Inzhener5.Инженер));
                }
            }
        }
    }
}
